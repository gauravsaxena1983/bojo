import { ThrowStmt } from '@angular/compiler';

export class MockData {
    private static readonly userMeta = {
        name: 'user',
        text: 'User',
        code: '000001|0001',
        fields : [
            {
                name: 'id',
                text: 'Id',
                type: 'unique',
                readonly: true
            },
            {
                name: 'name',
                text: 'Name',
                type: 'formula',
                readonly: true,
                value: 'firstname + " " +  lastname'
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
                id: '0000010001000001',
                email: 'shivajig@test.com',
                name: 'Shivaji Gaekwad',
                firstname: 'Shivaji',
                lastname: 'Gaekwad',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from Bangalore.',
                createdby: null,
                updatedby: null,
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '0000010001000002',
                email: 'chuckn@test.com',
                name: 'Chuck Norris',
                firstname: 'Chuck',
                lastname: 'Norris',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from Ryan',
                createdby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updatedby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '0000010001000003',
                email: 'tomm@test.com',
                name: 'Tom Max',
                firstname: 'Tom',
                lastname: 'Max',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from kentucky',
                createdby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updatedby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '0000010001000004',
                email: 'vijay@test.com',
                name: 'Vijay Chauhan',
                firstname: 'Vijay',
                lastname: 'Chauhan',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from Mandawa.',
                createdby: {
                    id: '0000010001000003',
                    name: 'Tom Max'
                },
                updatedby: {
                    id: '0000010001000003',
                    name: 'Tom Max'
                },
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '0000010001000005',
                email: 'rockyb@test.com',
                name: 'Rocky Balboa',
                firstname: 'Rocky',
                lastname: 'Balboa',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from  Philadelphia.',
                createdby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updatedby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updateddate: new Date(1995, 11, 17),
                createddate: new Date(1995, 11, 17)
            },
            {
                id: '0000010001000006',
                email: 'darthv@test.com',
                name: 'Darth Vader',
                firstname: 'Darth',
                lastname: 'Vader',
                active: true,
                title: 'Mr.',
                aboutme: 'I am from Tatooine.',
                createdby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
                updatedby: {
                    id: '0000010001000001',
                    name: 'Shivaji Gaekwad'
                },
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
