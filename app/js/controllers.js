/* Controllers */
angular.module('mgb-inventory.controllers', ['ngGrid'])
	.controller('MgbInventoryCtrl', ['$scope','$http',
		function($scope, $http) {
			$http.get('mpsa/mpsa.json').success(function(data) {
				$scope.myData = data;
			});

			$scope.filterOptions = {
				filterText: ''
			}

			$scope.gridOptions = {
				data: 'myData',
				showGroupPanel: true,
				showFilter: true,
				showFooter: true,
				filterOptions: $scope.filterOptions,
				jqueryUITheme: false,
				showColumnMenu: true,
				columnDefs: [{
					field: 'id',
					displayName: 'ID'
				}, {
					field: 'region',
					displayName: 'Region'
				}, {
					field: 'contractor',
					displayName: 'Contractor'
				}, {
					field: 'commodity',
					displayName: 'Commodity'
				}, {
					field: 'metallicorNonMetallic',
					displayName: 'Metallic or Non-Metallic'
				}, {
					field: 'stage',
					displayName: 'Stage'
				}, {
					field: 'location',
					displayName: 'Location'
				}, {
					field: 'contactPerson',
					displayName: 'Contact Person'
				}]

			};


			$scope.activateFilter = function() {
				var filterText = '';
				console.log($scope.json);
				var addToFilterIfNotUndefinedAndNotEmpty = function(filter, value, prefix) {
					if ((typeof value != 'undefined') && value !== '') {
						if (prefix == 'Region:' || prefix == 'Metallic or Non-Metallic:') {
							filter += prefix + '^' + value + '$;';
						} else {
							console.log(prefix + value + ';');
							filter += prefix + value + ';';
						}
					}
					return filter;
				}

				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterId, 'ID:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterRegion, 'Region:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterContractor, 'Contractor:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterCommodity, 'Commodity:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterMetallicOrNonMetallic, 'Metallic or Non-Metallic:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterStage, 'Stage:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterLocation, 'Location:');
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterContactPerson, 'Contact Person:');

				console.log(filterText);

				$scope.filterOptions.filterText = filterText;
			}
		}
	]);