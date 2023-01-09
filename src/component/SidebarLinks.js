import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import HealingIcon from '@mui/icons-material/Healing';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';

export const SidebarLinks = [

    {

        title: "Home",
        icon: <HomeIcon/>,
        link: "/Home"
    },

    {
        title: "Progress",
        icon: <HealingIcon/>,
        link: "/Progress"
    },
    {
        title: "Data",
        icon: <MedicalInformationIcon/>,
        link: "/Data"
    },
    {
        title: "Troubleshooting",
        icon: <TroubleshootIcon/>,
        link: "/TroubleShooting"
    },

];

