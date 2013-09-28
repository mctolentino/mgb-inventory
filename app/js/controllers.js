
/* Controllers */
angular.module('mgb-inventory.controllers', ['ngGrid'])
	.controller('MgbInventoryCtrl', ['$scope',
		function($scope) {
			$scope.filterOptions = {
				filterText: ''
			}

			$scope.myData = [{
				age: 400,
				id: "001-90-CAR",
				region: "ÑAR",
				contractor: "Lepanto Consolidated Mining  Co. and Far Southeast Gold Resources Inc.",
				dateApproved: "March 19, 1990",
				commodity: "Gold and Copper",
				area: "948.9695",
				location: "Mankayan, Benguet",
				headOffice: "21st Flr., BA-Lepanto Bldg. 8747 Paseo de Roxas, Makati City",
				contactPerson: "Mr. Bryan U. Yap",
				position: "President",
				contactNumber: " 815-9447"
			}, {
				age: 399,
				id: "002-90-XIII",
				region: "XIII",
				contractor: "HY Chromite Mining Development  Corp.",
				dateApproved: "January 22, 1991",
				commodity: "Chromite",
				area: "972.0000",
				metallicOrNonMetallic: "Metallic",
				stage: "Partial Commercial Operation",
				area: " 972.0000 ",
				metallicorNonMetallic: "Metallic",
				location: "Loreto (Dinagat Island), Surigao del Norte (Within Parcel III of Surigao Mineral Reservation)",
				headOffice: "No. 6 G. Araneta Ave., QC",
				contactPerson: "Mr. Lyonel Ty Tiao Hui",
				position: "Director",
				contactNumber: "715-12-31 715-10-35 0920-9214-033"
			}, {
				"age": 49,
				"id": "345-2010-IVA",
				"region": "IVA",
				"contractor": "Rapid City Realty and Development Corp.",
				"dateApproved": "June 9, 2010",
				"commodity": "Silica and other associated mineral deposits",
				"stage": "Exploration",
				"area": "1,015.1690",
				"metallicorNonMetallic": "Non-Metallic",
				"location": "Teresa, Morong, Binangonan and Angono, Rizal",
				"headOffice": "No. 167 Sumulong Highway , Mayamot, Antipolo, Rizal",
				"contactPerson": "Veronica Iñiguez Lee",
				"position": "President",
				"contactNumber": ""
			}];

			$scope.gridOptions = {
				data: 'myData',
				showGroupPanel: true,
				showFilter: true,
				showFooter: true,
				filterOptions: $scope.filterOptions,
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
							filterText += prefix + value + ';';
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

				if (filterText !== '') {
					filterText = filterText.substring(0, filterText.length - 1)
				}
				console.log(filterText);

				$scope.filterOptions.filterText = filterText;
			}
		}
	]);