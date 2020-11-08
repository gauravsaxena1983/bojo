import { ThrowStmt } from '@angular/compiler';

export class MockData {
    private static readonly userMeta = {
        name: 'user',
        text: 'User',
        fields : [
            {
                name: 'id',
                text: 'Id',
                type: 'number',
                readonly: true
            },
            {
                name: 'email',
                text: 'Email',
                type: 'string'
            },
            {
                name: 'title',
                text: 'Title',
                type: 'option',
                values: [
                    'Mr.',
                    'Ms.',
                    'Miss.',
                    'Dr.'
                ]
            },
            {
                name: 'firstname',
                text: 'First Name',
                type: 'string'
            },
            {
                name: 'lastname',
                text: 'Last Name',
                type: 'string'
            },
            {
                name: 'active',
                text: 'IsActive',
                type: 'bool'
            },
            {
                name: 'aboutme',
                text: 'About Me',
                type: 'mstring'
            },
            {
                name: 'createdby',
                text: 'Created By',
                type: 'ref'
            },
            {
                name: 'updatedby',
                text: 'Updated By',
                type: 'ref'
            },
            {
                name: 'updateddate',
                text: 'Updated Date',
                type: 'date'
            },
            {
                name: 'createddate',
                text: 'Created Date',
                type: 'date'
            }
        ],
        layouts: [
            {
                name: 'default'
            }
        ]
    };

    private static readonly userData = {
        list : [
            {
                id: '1',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '2',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '3',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '4',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '5',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '6',
                email: 'gsaxena@test.com',
                firstname: 'Gaurav',
                lastname: 'Saxena',
                active: true,
                title: 'Mr.',
                aboutme: 'I Live in Pune.\nAnd from Gwalior.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            }
        ]
    };

    public static getUserMeta(): any {
        return MockData.userMeta;
    }

    public static getUserData(id?: any): any {
        if (id) {
            const user = MockData.userData.list.filter((e) => e.id === id);
            return user;
        } else {
            return MockData.userData;
        }
    }

}
