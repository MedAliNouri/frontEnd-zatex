import { Routes } from '@angular/router';

export const content_child : Routes=[
   
    {path:'dashboard',
    loadChildren:()=>import('../component/dashboard/dashboard.module').then(m=>{console.log('from here');return m.DashboardModule}),

},
{path:'station',
loadChildren:()=>import('../component/station/station-routing.module').then(m=> m.StationRoutingModule)
},
{path:'pages',
loadChildren:()=>import('../component/pages/pages.module').then(m=>{console.log('from here');return m.PagesModule})
},
{path:'index',
loadChildren:()=>import('../component/index/index.module').then(m=> m.IndexModule)
},
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
  
]