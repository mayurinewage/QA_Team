describe('Block ZIP code SNAP US ', () => {
    it('SNAP US', () => {
        cy.visit('https://shopnewage.com/?z=33133')
        cy.wait(10000)
        cy.get('[data-testid="klaviyo-form-RFhphJ"]').should('exist').then(($closePopup) => {
            if ($closePopup.length > 0) {
                // If the element with data-testid "klaviyo-form-RFhphJ" exists, click on the button
                cy.get('button.klaviyo-close-form').click();
            } else {
                // Handle the case when the element is not present (optional)
                cy.log('Popup element not found, skipping click');
            }
        });
        cy.get('b > .svgZipcode').click()
        cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').click().clear()
        const zipcodes = [
            99403, 99299, 99165, 98929, 98667, 98492, 98477, 98460, 98455, 98450,
            98442, 98262, 98205, 98189, 98184, 98171, 98151, 98132, 98054, 97482,
            97475, 97472, 97428, 97427, 97425, 97372, 97313, 97299, 97272, 97271,
            97259, 97255, 97254, 97253, 97251, 95887, 95314, 95250, 94625, 94286,
            94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155, 94154, 94153
        ];
        zipcodes.forEach((zipcode, index) => {
            cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type(zipcode.toString(), { delay: 0 });
            if (index < zipcodes.length - 1) {
                cy.wait(1000);
                cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click();
                cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .errorRegionalZipCode').should('have.text', 'Sorry but we do not ship to your location');

            }
        });
    })
    it.only('SNAP CA', () => {
        //cy.visit('https://ca.shopnewage.com/?z=a1a1a1')
        cy.visit('https://ca.shopnewage.com/?_ab=0&_fd=0&_sc=1&preview_theme_id=126087692355')
        cy.wait(1000)
        cy.get('b > .svgZipcode').click()
        cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalRedioBtn > .redioflexbutton > .regionalFirstRediobtn > label > .checkmark').click()

        // const zipcodes = [
        //     98929,98667,98477,98455,98262,98184,98151,97482,97259,97251,
        //     99403, 99299, 99165, 98492,  98460,  98450,
        //     98442, 98205, 98189,  98171,  98132, 98054, 
        //     97475, 97472, 97428, 97427, 97425, 97372, 97313, 97299, 97272, 97271,
        //     97255, 97254, 97253,  95887, 95314, 95250, 94625, 94286,
        //     94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155, 94154, 94153
        // ];
        // const zipcodes = [
            // 94152, 94150, 94138, 94136, 94135, 94106, 94101, 94013, 93784, 93780,
            // 93382, 93381, 93093, 92725, 92720, 92718, 92717, 92715, 92714, 92710,
            // 92709, 92687, 92686, 92680, 92670, 92669, 92668, 92667, 92666, 92665,
            // 92645, 92644, 92643, 92641, 92640, 92635, 92633, 92632, 92631, 92621,
            // 92601, 92515, 92424, 92414, 92412, 92326, 92292, 92194, 92189
        // ]

       
// Your list of numbers
const zipcodes = [
    99403, 99299, 99165, 98929, 98667, 98492, 98477, 98460, 98455, 98450, 98442, 98262,
    98205, 98189, 98184, 98171, 98151, 98132, 98054, 97482, 97475, 97472, 97428, 97427,
    97425]
//     const zipcodeset2 = [   97372, 97313, 97299, 97272, 97271, 97259, 97255, 97254, 97253, 97251, 95887,
//     95314, 95250, 94625, 94286, 94246, 94209, 94199, 94175, 94171, 94162, 94156, 94155,
//     94154, 94153]
//     const zipcodeset3 = [ 94152, 94150, 94138, 94136, 94135, 94106, 94101, 94013, 93784, 93780,
//     93382, 93381, 93093, 92725, 92720, 92718, 92717, 92715, 92714, 92710, 92709, 92687,
//     92686, 92680, 92670
//     ]
//     const zipcodeset4 = [ 92669, 92668, 92667, 92666, 92665, 92645, 92644, 92643, 92641,
//     92640, 92635, 92633, 92632, 92631, 92621, 92601, 92515, 92424, 92414, 92412, 92326,
//     92292, 92194, 92189, 92188]
//     const zipcodeset5 = [ 92184, 92164, 92162, 92133, 92090, 91990, 91947, 91841,
//     91799, 91798, 91797, 91795, 91760, 91720, 91719, 91497, 91399, 91388, 91363, 91191,
//     91131, 90888, 90845, 90725, 90659]
//     const zipcodeset6 = [ 90612, 90398, 90397, 90313, 90103, 90102, 90101,
//     8988, 89824, 8922, 8905, 88516, 87165, 86555, 86330, 85777, 85662, 85313, 85294, 85293,
//     85292, 85291, 85290, 85289, 85279]
//     const zipcodeset7 = [ 85278, 85273, 85272, 85247, 85245, 85243, 85242, 85241,
//     85240, 85239, 85238, 85237, 85235, 85232, 85231, 85230, 85228, 85227, 85223, 85222, 85221,
//     85220, 85219, 85218, 85217]
//     const zipcodeset8 = [ 85099, 85098, 85097, 85096, 85077, 85055, 85025, 84717, 84189,
//     84144, 84136, 84009, 83757, 83733, 83730, 83727, 83721, 83601, 81247, 81153, 81134, 81127,
//     81075, 80945, 80944]
//     const zipcodeset9 = [ 80943, 80940, 80329, 80328, 80323, 80322, 80321, 80295, 80280, 80279,
//     80028, 79990, 7983, 79405, 79320, 79187, 78851, 78798, 78789, 78788, 78786, 78785, 78781,
//     78780, 78478]
//     const zipcodeset10 = [ 78477, 78476, 78475, 78474, 78473, 78471, 78470, 78461, 78287, 78286, 78275,
//     78262, 78049, 77869, 77709, 77298, 77296, 77294, 77286, 77285, 77278, 77276, 77260, 77250,
//     77247]
//     const zipcodeset11 = [ 77246, 77097, 7709, 76795, 76546, 76545, 76505, 76299, 75396, 75388, 75387, 75386,
//     75364, 75363, 75353, 75344, 75343, 75340, 75334, 75323, 75310, 75286, 75258, 75245, 75037]
//     const zipcodeset12 = [
//     7477, 74542, 74194, 74189, 74184, 74183, 73454, 73451, 73199, 73198, 73197, 73193, 73185,
//     73094, 7309, 72439, 72198, 72189, 71951, 7194, 71844, 7182, 71768, 71208, 70883]
//     const zipcodeset13 = [ 70595, 70500,70149, 70140, 6928, 6925, 6922, 6920, 6859, 6842, 6832, 68181, 68155, 68120, 66692, 66653,
//     66652, 66642, 66637, 66628, 6650, 66279, 66077, 66019, 65776]
//     const zipcodeset14 = [ 65701, 6497, 64944, 64869,
//     64789, 6454, 64447, 64194, 64193, 64192, 64185, 64183, 64172, 63963, 63938, 6386, 63198,
//     63196, 63190, 63001, 62857, 62855, 62805, 62746, 62721]
//     const zipcodeset15 = [ 62713, 62247, 62224, 60679, 60663,
//     60597, 60570, 60290, 60170, 60125, 60092, 60049
// ];

// Split the list into arrays of 25 values each




        
        
        
        
        
        
        
        //98929,98667,98477,98455,98262,98184,98151,97482,97259,97251,
        zipcodes.forEach((zipcode, index) => {
            cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .inputFileds > .RegionalDiv > .regional_input').clear().type(zipcode.toString(), { delay: 0 });
            if (index < zipcodes.length - 1) {
                cy.wait(1000);
                cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalSubmitBtn > .button').click();
                cy.get('.mobileRegionalzipCode > .headerRegionalData > .regionalZipData > .addZipCodemain > .HeaderPopData > .regionalPopup > .regionalData > .regionalBody > .regionalInputFileds > .errorRegionalZipCode').should('have.text', 'Sorry but we do not ship to your location');

            }
        });
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})