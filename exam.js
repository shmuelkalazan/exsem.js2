let militaryUnit = {

    name: "1st Infantry Division",
  
    location: "Fort Bragg, North Carolina, USA",
  
    establishmentDate: "1941-06-01",
  
    unitType: "Infantry Division",
  
    commandStructure: {
  
      commandingOfficer: {
  
        rank: "Major General",
  
        name: "John Doe",
  
        contact: {
  
          email: "john.doe@example.com",
  
          phone: "+1-555-123-4567",
  
        },
  
      },
  
      executiveOfficer: {
  
        rank: "Colonel",
  
        name: "Jane Smith",
  
        contact: {
  
          email: "jane.smith@example.com",
  
          phone: "+1-555-987-6543",
  
        },
  
      },
  
      chiefOfStaff: {
  
        rank: "Brigadier General",
  
        name: "Robert Brown",
  
        contact: {
  
          email: "robert.brown@example.com",
  
          phone: "+1-555-555-1234",
  
        },
  
      },
  
    },
  
    personnel: [
  
      {
  
        id: 1,
  
        name: "Private First Class Alice Johnson",
  
        rank: "Private First Class",
  
        role: "Rifleman",
  
        contact: {
  
          email: "alice.johnson@example.com",
  
          phone: "+1-555-000-1111",
  
        },
  
      },
  
      {
  
        id: 2,
  
        name: "Sergeant Michael White",
  
        rank: "Sergeant",
  
        role: "Squad Leader",
  
        contact: {
  
          email: "michael.white@example.com",
  
          phone: "+1-555-000-2222",
  
        },
  
      },
  
    ],
  
    equipment: {
  
      vehicles: [
  
        {
  
          type: "M1 Abrams Tank",
  
          quantity: 20,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Humvee",
  
          quantity: 50,
  
          status: "Operational",
  
        },
  
      ],
  
      firearms: [
  
        {
  
          type: "M16 Rifle",
  
          quantity: 500,
  
          status: "Operational",
  
        },
  
        {
  
          type: "M249 SAW",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
      otherEquipment: [
  
        {
  
          type: "Night Vision Goggles",
  
          quantity: 150,
  
          status: "Operational",
  
        },
  
        {
  
          type: "Field Radios",
  
          quantity: 100,
  
          status: "Operational",
  
        },
  
      ],
  
    },
  
    missions: [
  
      {
  
        missionName: "Operation Desert Storm",
  
        startDate: "1991-01-17",
  
        endDate: "1991-02-28",
  
        description: "Combat operation to liberate Kuwait from Iraqi occupation.",
  
      },
  
      {
  
        missionName: "Operation Enduring Freedom",
  
        startDate: "2001-10-07",
  
        endDate: "2014-12-28",
  
        description:
  
          "Military operations aimed at dismantling al-Qaeda and removing the Taliban from power in Afghanistan.",
  
      },
  
    ],
  
    trainingPrograms: [
  
      {
  
        programName: "Basic Combat Training",
  
        duration: 10,
  
        focus:
  
          "Fundamentals of soldiering, physical conditioning, and basic combat skills.",
  
      },
  
      {
  
        programName: "Advanced Individual Training",
  
        duration: 12,
  
        focus:
  
          "Specialized training for specific military occupational specialties.",
  
      },
  
    ],
  
    history: [
  
      {
  
        eventDate: "1941-06-01",
  
        eventDescription: "Establishment of the 1st Infantry Division.",
  
      },
  
      {
  
        eventDate: "1944-06-06",
  
        eventDescription: "Participated in the D-Day landings in Normandy.",
  
      },
  
    ],
  
    currentDeployment: {
  
      location: "Middle East",
  
      mission: "Counter-terrorism operations",
  
      startDate: "2024-01-01",
  
      estimatedEndDate: "2024-12-31",
  
    },
  
  };
  
  
function Mission1(militaryUnit) {
    return  `Chief of staff name: ${militaryUnit.commandStructure.chiefOfStaff.name}
     rank: ${militaryUnit.commandStructure.chiefOfStaff.rank}
     phone:${militaryUnit.commandStructure.chiefOfStaff.contact.phone}`
}
//console.log(Mission1(militaryUnit));

function Mission2(militaryUnit){
  let count = 0;
  for (let index = 0; index < militaryUnit.personnel.length; index++) {   
    count++
  }
  return count
}
//console.log(Mission2(militaryUnit));

function Mission3(NewDeployment, militaryUnit)
{
    const deploymentToHistory = {
        eventDate: militaryUnit.currentDeployment.startDate,
        eventDescription: militaryUnit.currentDeployment.mission
    }
    militaryUnit.history.push(deploymentToHistory);

    militaryUnit.currentDeployment.location = NewDeployment.location;
    militaryUnit.currentDeployment.mission = NewDeployment.mission;
    militaryUnit.currentDeployment.startDate = NewDeployment.startDate;
    militaryUnit.currentDeployment.estimatedEndDate = NewDeployment.estimatedEndDate;
    return militaryUnit;
}
const newDeployment = {     
  location: "Suoth",
  mission: "Kill-militery",
  startDate: "2025-08-01",
  estimatedEndDate: "2026-12-31",
}

console.log(Mission3(newDeployment, militaryUnit));
 
function Mission4(firearms1) {
  for (let index = 0; index < militaryUnit.equipment.firearms.length; index++) {
  if (militaryUnit.equipment.firearms[index].type  === firearms1.type 
    && militaryUnit.equipment.firearms[index].status === firearms1.status)
    {  
      militaryUnit.equipment.firearms[index].quantity++ 
      return militaryUnit
    }
  } 
  let newfirearms = Object.create(militaryUnit.equipment.firearms[0]);
  newfirearms.type = firearms1.type
  newfirearms.status = firearms1.status
  newfirearms.quantity = firearms1.quantity
  console.log(newfirearms);
  militaryUnit.equipment.firearms[militaryUnit.equipment.firearms.length] = newfirearms  
  return militaryUnit
}


 let a ={
  
  type: "M17 Rifle",

  quantity: 500,

  status: "Operational",

}



//console.log(Mission4(a));
//console.log(militaryUnit);

function Mission5(militaryUnit){
   sum = 0
   for (let index = 0; index < militaryUnit.trainingPrograms.length; index++) {
      sum += militaryUnit.trainingPrograms[index].duration   
   }  
   return sum
}
//console.log(Mission5(militaryUnit));
