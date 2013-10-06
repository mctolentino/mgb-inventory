/* Controllers */
angular.module('mgb-inventory.controllers', ['ngGrid'])
	.controller('MgbInventoryCtrl', ['$scope', '$http',
		function($scope, $http) {

			var viewContactCellTemplate = '<a href="#" class="popup" value="View" ng-click="OnView(row.entity);">View</a>';

			$http.get('mpsa/mpsa.json').success(function(data) {
				$scope.myData = data;
			});

			$scope.viewDetails = false;

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
				}, {
					field: 'view',
					displayName: '',
					enableCellEdit: false,
					maxWidth: 10,
					cellTemplate: viewContactCellTemplate,
					colFilterText: ''
				}]

			};


			$scope.OnView = function(value) {
				$scope.id = value.id;
				$scope.region = value.region;
				$scope.province = value.province;
				$scope.contractor = value.contractor;
				$scope.commodity = value.commodity;
				$scope.metallicorNonMetallic = value.metallicorNonMetallic;
				$scope.stage = value.stage;
				$scope.location = value.location;
				$scope.contactPerson = value.contactPerson;
				$scope.position = value.position;
				$scope.contactNumber = value.contactNumber;
				$scope.headOffice = value.headOffice;
				$scope.dateApproved = value.dateApproved;
				$scope.area = value.area;

				$scope.viewDetails = true;
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
				filterText = addToFilterIfNotUndefinedAndNotEmpty(filterText, $scope.filterProvince, 'Province:');
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