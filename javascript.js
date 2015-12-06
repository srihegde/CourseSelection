
$(document).ready(function(){

	/**
	* Colours the appropriate slot with the appropriate colour 
	* using the parameters passed.
	*
	* @text: class name of the slot which is to be coloured
	* @decorate: should it be coloured or not.
	* #l_grey: if not coloured then should the colour be light grey
	*          or dark grey.
	**/
	function colourIt(text,decorate,l_grey){
		if(decorate){

			$("."+text)[0].style.backgroundColor=colour;
			$("."+text)[1].style.backgroundColor=colour;
			$("."+text)[2].style.backgroundColor=colour;
			}
			else if(l_grey){
			$("."+text)[0].style.backgroundColor=light_grey;
			$("."+text)[1].style.backgroundColor=light_grey;
			$("."+text)[2].style.backgroundColor=light_grey;
			}
			else{
			$("."+text)[0].style.backgroundColor=dark_grey;
			$("."+text)[1].style.backgroundColor=dark_grey;
			$("."+text)[2].style.backgroundColor=dark_grey;
			
			}
	}

	var slotSelected = []; // Array of slots selected.
	var value=""; // Stores the shoft form of the course most recently selected.
	
	// Hashmap with course name as key and time slots as value.
	var courseToSlot={
		"CV": ["m1","th1"],
		"RFCD":["m1","th1"],
		"SSSBB":["m1","th1"],
		"RA":["m1","th1"],
		"DBSI":["m1","th1"],
		"MC":["m1","th1"],
		"IR":["m1","th1"],
		"MS":["m2","th2"],
		"SSB":["m2","th2"],
		"WSI":["m2","th2"],
		"OpCS":["m2","th2"],
		"MSD":["m2","th2"],
		"SDN":["m2","th2"],
		"FIN":["m2","th2"],
		"SSP":["m3","th3"],
		"SDCT":["m3","th3"],
		"DSys":["m3","th3"],
		"NP":["m3","th3"],
		"CAOS":["m3","th3"],
		"CT":["m4","th4"],
		"Socio":["m4","th4"],
		"Psy":["m4","th4"],
		"NT":["t1","f1"],
		"AELD":["t1","f1", "w3"],
		"DHCS":["t1","f1"],
		"WN":["t1","f1"],
		"PO":["t1","f1"],
		"MMBP":["t1","f1"],
		"ATD":["t2","f2"],
		"AEA":["t2","f2"],
		"SE":["t2","f2"],
		"Rob":["t2","f2"],
		"TMC":["t2","f2"],
		"SSD":["t2","f2"],
		"A&G":["t3","th3"],
		"IFA":["t3","th3"],
		"TOC":["t3","th3"],
		"GT":["t3","th3"],
		"PCSMA":["t3","th3"],
		"Lit":["t4","f4"],
		"TPEE":["t4","f4"],
		"ITGov":["t4","f4"],
		"IGT":["t4","f4"],
		"BDA":["t4"],
		"PGM":["w2","f3"],
		"GPU":["w2","f3", "m4"],
		"TC":["w2","f3"],
		"OCS":["w2","f3"],
		"ALG":["w2","f3"],
		"OE":["w3","w4"],
		"SC":["f4"],
		"ATA":["w2","w3"]

	}

	// Hashmap with time slot as key and courses in that slot as value
	var slotToCourse = {
		"m1":["CV","RFCD","SSSBB","RA","DBSI","MC", "IR"],
		"m2":["MS","SSB","WSI","OpCS","MSD","SDN", "FIN"],
		"m3":["SSP","SDCT","DSys","NP","CAOS"],
		"m4":["CT","Socio","Psy","LAB-GPU"],
		"t1":["AELD","DHCS","WN","PO","MMBP","NT"],
		"t2":["ATD","AEA","SE","Rob","TMC","SSD"],
		"t3":["A&G","IFA","TOC","GT","PCSMA"],
		"t4":["Lit","TPEE","ITGov","IGT", "BDA"],
		"w1":["SSP","SDCT","DSys","ENT 2","CAOS"],
		"w2":["PGM","GPU","TC","OCS","ALG","ATA"],
		"w3":["LAB-ATA", "LAB-AELD", "OE"],
		"w4":["CT","Socio","Psy"],
		"th1":["CV","RFCD","SSSBB","RA","DBSI","MC","IR"],
		"th2":["MS","SSB","WSI","OpCS","MSD","SDN", "FIN"],
		"th3":["A&G","IFA","TOC","GT","PCSMA"],
		"th4":["SEMINAR"],
		"f1":["NT","AELD","DHCS","WN","PO","MMBP"],
		"f2":["ATD","AEA","SE","Rob","TMC","SSD"],
		"f3":["PGM","GPU","TC","OCS","ALG"],
		"f4":["Lit","TPEE","ITGov","IGT","SC"]
	}


	var colour="#009933"; // Highlight the slot with this colour
	var colourArray=["#009933","#ff6600","#cc00cc","#0066ff","#9933ff"] // List of colours to choose from.
	var light_grey = "#b2b2b2"
	var dark_grey = "#4c4c4c"
	courseSelected=[]; // List of courses selected till now.
	

	// Maps time slot to a function which knows how to colour the slots.
	var slotToFunction={
		"m1" : function(decorate){
					// console.log("m1");
					colourIt("monday_first_slot",decorate, true);
					
					
					
				},
		"m2" : function(decorate){
					colourIt("monday_second_slot",decorate, false);
					
				},
		"m3" : function(decorate){
					colourIt("monday_third_slot",decorate,true);
				},
		"m4" : function(decorate){
					colourIt("monday_fourth_slot",decorate, false);
				},
		"t1" : function(decorate){
					colourIt("tuesday_first_slot",decorate, false);
				},
		"t2" : function(decorate){
					colourIt("tuesday_second_slot",decorate,true);
				},
		"t3" : function(decorate){
					colourIt("tuesday_third_slot",decorate,false);
				},
		"t4" : function(decorate){
					colourIt("tuesday_fourth_slot",decorate,true);
				},
		"w1" : function(decorate){
					colourIt("wednesday_first_slot",decorate,true);
				},
		"w2" : function(decorate){
					colourIt("wednesday_second_slot",decorate,false);
				},
		"w3" : function(decorate){
					colourIt("wednesday_third_slot",decorate,true);
				},
		"w4" : function(decorate){
					colourIt("wednesday_fourth_slot",decorate,false);
				},
		"th1" : function(decorate){
					colourIt("thursday_first_slot",decorate,false);
				},
		"th2" : function(decorate){
					colourIt("thursday_second_slot",decorate,true);
				},
		"th3" : AELDionDHCSecoWNe){PO				MBPlouNT("thursday_thATD_slA&G",dIFLitTPEEfGTITGov
PCIGT,
		"th4" : function(decorate){
					colourIt("thursday_fourth_slot",decorate,true);
				},
		"f1" : function(decorate){
					colourIt("friday_first_slot",decorate,true);
				},
		"f2" : function(decorate){
					colourIt("friday_second_slot",decorate,false);
				},
		"f3" : function(decorate){
					colourIt("friday_third_slot",decorate,true);
				},
		"f4" : function(decorate){
					colourIt("friday_fourth_slot",decorate,false);
				},
				
				
	}

	$(".course").click(function(){
		
		var value = $(this).attr("value");
		// If the course is being checked, check if there are any conflicts,
		// If not then colour that slot.
		if($(this).is(":checked")){
			// Check for conflicts
			for(var i=0;i<courseToSlot[value].length;i++){
				
				console.log("1 "+courseToSlot[value][i]);
				if(slotSelected.indexOf(courseToSlot[value][i])>-1){
					// console.log(slotSelected.indexOf(courseToSlot[value][i]));
					alert("conflict with "+$(slotToCourse[courseToSlot[value][i]]).filter(courseSelected)[0]);
					$(this).attr("checked",false);
					return;
				}
				
			}
			// Add the course in courseSelected array
			courseSelected.push(value);
			// Add the slots to slotSelected Array
			slotSelected = slotSelected.concat(courseToSlot[value]);
			// Colour the slots
			for( var i=0;i<slotSelected.length;i++){
			
				slotToFunction[slotSelected[i]](true);
			}
		}
		// If the course is being unchecked.
		else{
			
			//Remove the slots from slotSelected array
			slotSelected = slotSelected.filter( function( el ) {
  				return courseToSlot[value].indexOf( el ) < 0;
			} );
			
			// Remove the course from courseselected.
			if(courseSelected.indexOf(value)>-1){
				courseSelected.splice(courseSelected.indexOf(value),1);
				
			}
			
			// Colour the slot
			for( var i=0;i<courseToSlot[value].length;i++){
					
					slotToFunction[courseToSlot[value][i]](false);
			}
		
		}

	});

});