import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  {
  path: '',
  data: {
      title: 'Dashboard'
  },
  children: [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
    }, {
      path: 'accordion',
      loadChildren: 'app/+accordion/accordion.module#AccordionModule',
      data: {
        title: 'Accordion'
      },
      canActivate: [AuthGuard],
    }, {
      path: 'alert',
      loadChildren: 'app/+alert/alert.module#AlertModule',
      data: {
        title: 'Alert',
      },
      canActivate: [AuthGuard],
    }, {
      path: 'layout',
      data: {
        title: 'Layout',
        canActivate: [AuthGuard],
      },
      children: [
        {
          path: '',
          canActivateChild: [AuthGuard],
          children: [
            {
              path: 'configuration',
              loadChildren: 'app/+layout/configuration/configuration.module#ConfigurationModule',
              data: {
                title: 'Configuration'
              },
            }, {
              path: 'custom',
              loadChildren: 'app/+layout/custom/custom.module#CustomModule',
              data: {
                title: 'Disable Layout'
                //disableLayout: true
              }
            }, {
              path: 'content',
              loadChildren: 'app/+layout/content/content.module#ContentModule',
              data: {
                title: 'Content'
              }
            }, {
              path: 'header',
              loadChildren: 'app/+layout/header/header.module#HeaderModule',
              data: {
                title: 'Header'
              }
            }, {
              path: 'sidebar-left',
              loadChildren: 'app/+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',
              data: {
                title: 'Sidebar Left'
              }
            }, {
              path: 'sidebar-right',
              loadChildren: 'app/+layout/sidebar-right/sidebar-right.module#SidebarRightModule',
              data: {
                title: 'Sidebar Right'
              }
            },
          ]
        }
      ]
    }, {
      path: 'boxs',
      data: {
        title: 'Boxs',
        canActivate: [AuthGuard],
      },
      children: [
        {
          path: '',
          canActivateChild: [AuthGuard],
          children: [
          {
            path: 'box',
            loadChildren: 'app/+boxs/box-default/box-default.module#BoxDefaultModule',
            data: {
              title: 'Box'
            }
          }, {
            path: 'info-box',
            loadChildren: 'app/+boxs/box-info/box-info.module#BoxInfoModule',
            data: {
              title: 'Info Box'
            }
          }, {
            path: 'small-box',
            loadChildren: 'app/+boxs/box-small/box-small.module#BoxSmallModule',
            data: {
              title: 'Small Box'
            }
          }
        ]
        }
      ]}, {
        path: 'dropdown',
        loadChildren: 'app/+dropdown/dropdown.module#DropdownModule',
        data: {
          title: 'Dropdown',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'tabs',
        loadChildren: 'app/+tabs/tabs.module#TabsModule',
        data: {
          title: 'Tabs',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'leads',
        loadChildren: 'app/+leads/leads.module#LeadsModule',
        data: {
          title: 'Leads',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'lead/:id',
        loadChildren: 'app/+lead-info/lead-info.module#LeadInfoModule',
        data: {
          title: 'Lead Information',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'reports',
        loadChildren: 'app/+reports/reports.module#ReportsModule',
        data: {
          title: 'Reports',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'site-managers',
        loadChildren: 'app/+site-managers/site-managers.module#SiteManagersModule',
        data: {
          title: 'Site Managers',
        },
        canActivate: [AuthGuard],
      }, {
        path: 'calendar',
        loadChildren: 'app/+calendar/calendar.module#CalendarModule',
        data: {
          title: 'Calendar',
        },
        canActivate: [AuthGuard],
      },
    ]
  }, {
    path: 'form',
    data: {
      title: 'Form',
    },
    children: [
      {
        path: 'input-text',
        loadChildren: 'app/+form/input-text/input-text.module#InputTextModule',
        data: {
          title: 'Input Text',
        }
      }
    ]
  }, {
    path: 'login',
    loadChildren: 'app/+login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  }, {
    path: 'register',
    loadChildren: 'app/+register/register.module#RegisterModule',
    data: {
      customLayout: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
