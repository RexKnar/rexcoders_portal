export class Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

export var MENUITEMS: Menu[] = [
    {
        path: '#', title: 'Dashboard', icon: 'fas fa-th', type: 'link'
    },
    {
        title: 'Trainings', icon: 'fas fa-shopping-basket', type: 'sub', active: false, children: [

            { path: '/admin/training/add', title: 'Add Training', type: 'link', },
            { path: '/admin/training/list', title: 'Training List', type: 'link' },
            { path: '/admin/training/approval-list', title: 'Approved List', type: 'link', },
            { path: '/admin/training/pending-list', title: 'Pending List', type: 'link', },
            
        ]
    },
    {
        title: 'Enrollments', icon: 'fas fa-gem', type: 'sub', active: false, children: [
            { path: '#', title: 'Paid', type: 'link' },
            { path: '#', title: 'Unpaid', type: 'link', }
        ]
    },
    {
        title: 'Report', icon: 'fas fa-archive', type: 'sub', active: false, children: [
            { path: '#', title: 'Admin Revenue', type: 'link' },
            { path: '#', title: 'Instructors Revenue', type: 'link', }
        ]
    },
    {
        title: 'Staffs', icon: 'fas fa-user-shield', type: 'sub', active: false, children: [
            { path: '#', title: 'Add Staff', type: 'link' },
            { path: '#', title: '', type: 'link', }
        ]
    },
    {
        title: 'Students', icon: 'fas fa-user', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage Students', type: 'link' },
            { path: '#', title: 'Add New Student', type: 'link', },
            { path: '#', title: 'Active Students', type: 'link', }
        ]
    },
    {
        title: 'Settings', icon: 'fas fa-cog', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage State', type: 'link' },
            { path: '#', title: 'Manage City', type: 'link', },
            { path: '#', title: 'Manage Domain', type: 'link', },
            { path: '#', title: 'Manage Category', type: 'link', }
        ]
    },
    {
        path: '#', title: 'My Profile', icon: 'fas fa-address-card', type: 'link'
    },
    
]