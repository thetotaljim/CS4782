(function () {
    'use strict';

    angular.module('csApp').controller('HomeController', home);

    home.$inject = ['HomeService'];
    function home(HomeService) {
        var vm = this;

        HomeService.get()
            .then(function (response) {
                vm.nistSecurityFramework = response;
            });

        vm.selectedNode = null;

        vm.treeOptions = {
            nodeChildren: "children",
            allowDeselect: false,
            dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            },
            equality: function(node1, node2) {
                // Compare IDs instead
                return node1 === node2;
            }
        };

        vm.updateSelected = updateSelected;

        function updateSelected(node) {
            vm.selectedNode = node;
        }
    }
})();