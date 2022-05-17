import { Routes } from '@angular/router';

export const content_child : Routes=[
   
    {path:'dashboard',
    loadChildren:()=>import('../component/dashboard/dashboard.module').then(m=>{console.log('from here');return m.DashboardModule}),

},
 
{path:'pages',
loadChildren:()=>import('../component/pages/pages.module').then(m=>{console.log('from here');return m.PagesModule})
},
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
  
]