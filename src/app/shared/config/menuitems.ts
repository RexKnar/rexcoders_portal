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
        
        title: 'Courses', icon: 'fas fa-shopping-basket', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage Courses', type: 'link' },
            { path: '#', title: 'Add New Course', type: 'link', },
            { path: '#', title: 'Course Category', type: 'link' },
            { path: '#', title: 'Coupons', type: 'link' }
        ]
    },
    {
        title: 'Enrollment', icon: 'fas fa-gem', type: 'sub', active: false, children: [
            { path: '#', title: 'Enroll History', type: 'link' },
            { path: '#', title: 'Enroll a Student', type: 'link', }
        ]
    },
    {
        title: 'Report', icon: 'fas fa-archive', type: 'sub', active: false, children: [
            { path: '#', title: 'Admin Revenue', type: 'link' },
            { path: '#', title: 'Instructors Revenue', type: 'link', }
        ]
    },
    {
        title: 'Admins', icon: 'fas fa-user-shield', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage Admins', type: 'link' },
            { path: '#', title: 'Add New Admin', type: 'link', }
        ]
    },
    {
        title: 'Instructors', icon: 'fas fa-toolbox', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage Instructors', type: 'link' },
            { path: '#', title: 'Add New Instructor', type: 'link', },
            { path: '#', title: 'Instructors Payouts', type: 'link', }
        ]
    },
    {
        title: 'Students', icon: 'fas fa-user', type: 'sub', active: false, children: [
            { path: '#', title: 'Manage Students', type: 'link' },
            { path: '#', title: 'Add New Student', type: 'link', }
        ]
    },
    {
        path: '#', title: 'Addon', icon: 'fas fa-layer-group', type: 'link'
    },
    {
        path: '#', title: 'Themes', icon: 'fas fa-paint-brush', type: 'link'
    },
    {
        path: '#', title: 'Message', icon: 'fas fa-comments', type: 'link'
    },
    {
        path: '#', title: 'My Profile', icon: 'fas fa-address-card', type: 'link'
    },
    {
        title: 'Settings', icon: 'fas fa-cog', type: 'sub', active: false, children: [
            { path: '#', title: 'Website Settings', type: 'link' },
            { path: '#', title: 'System Settings', type: 'link' },
            { path: '#', title: 'Payment Settings', type: 'link' },
            { path: '#', title: 'Social Logins', type: 'link' },
            { path: '#', title: 'SMTP Settings', type: 'link' },
            { path: '#', title: 'About App', type: 'link' },

        ]
    }
]