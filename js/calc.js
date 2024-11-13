
const costsData = {
    
    
Albania: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 80, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
},
Japan: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 100, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 300, transportation: 80, food: 100, entertainment: 50, miscellaneous: 50 }
},
Thailand: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 100, transportation: 50, food: 60, entertainment: 50, miscellaneous: 50 }
},
Italy: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 80, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 200, transportation: 50, food: 80, entertainment: 50, miscellaneous: 50 }
},
Spain: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 60, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 150, transportation: 50, food: 70, entertainment: 50, miscellaneous: 50 }
},
UnitedStates: {
'budget': { accommodation: 60, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 150, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 400, transportation: 100, food: 120, entertainment: 50, miscellaneous: 50 }
},
Brazil: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 150, transportation: 50, food: 70, entertainment: 50, miscellaneous: 50 }
},
Mexico: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 100, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
},
Canada: {
'budget': { accommodation: 60, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 120, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 350, transportation: 80, food: 120, entertainment: 50, miscellaneous: 50 }
},
UnitedKingdom: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 90, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 250, transportation: 50, food: 80, entertainment: 50, miscellaneous: 50 }
},
France: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 80, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 200, transportation: 50, food: 80, entertainment: 50, miscellaneous: 50 }
},
Greece: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 60, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 180, transportation: 50, food: 70, entertainment: 50, miscellaneous: 50 }
},
Australia: {
'budget': { accommodation: 70, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 150, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 350, transportation: 80, food: 120, entertainment: 50, miscellaneous: 50 }
},
SouthKorea: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 55, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 150, transportation: 50, food: 70, entertainment: 50, miscellaneous: 50 }
},
Egypt: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 80, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
},
India: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 80, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
},
SouthAfrica: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 150, transportation: 50, food: 70, entertainment: 50, miscellaneous: 50 }
},
Malaysia: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 100, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
},
Portugal: {
'budget': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'mid-range': { accommodation: 50, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 },
'luxury': { accommodation: 150, transportation: 50, food: 50, entertainment: 50, miscellaneous: 50 }
}
};




function updateCosts() {
    const country = document.getElementById('country').value;
    const travelStyle = document.getElementById('travelStyle').value;
    const accommodationType = document.getElementById('accommodationType').value;
    const mealPreferences = document.getElementById('mealPreferences').value;
    const mealsPerDay = document.getElementById('mealsPerDay').value;
    const transportationMode = document.getElementById('transportationMode').value;
    const activities = document.getElementById('activities').value;
    const days = document.getElementById('days').value;

    if (!country || !costsData[country]) {
        return;
    }

    const costs = costsData[country][travelStyle];
    const accommodationCost = costs.accommodation;
    const transportationCost = costs.transportation;
    const foodCost = costs.food * mealsPerDay;
    const entertainmentCost = activities === 'none' ? 0 : costs.entertainment;
    const miscellaneousCost = costs.miscellaneous;

    const totalCost = (accommodationCost + transportationCost + foodCost + entertainmentCost + miscellaneousCost) * days;

    document.getElementById('accommodation').textContent = `$${accommodationCost}`;
    document.getElementById('transportation').textContent = `$${transportationCost}`;
    document.getElementById('food').textContent = `$${foodCost}`;
    document.getElementById('entertainment').textContent = `$${entertainmentCost}`;
    document.getElementById('miscellaneous').textContent = `$${miscellaneousCost}`;
    document.getElementById('total').textContent = `$${totalCost}`;
    document.getElementById('totalDays').textContent = days;
    document.getElementById('selectedCountry').textContent = country;
}