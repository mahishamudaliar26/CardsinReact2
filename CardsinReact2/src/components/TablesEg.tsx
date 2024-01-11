import React from 'react';
import { Grid } from "gridjs-react";
import { useState, useEffect } from 'react';
import { Card , Row, Col} from 'react-bootstrap';


function TablesEg() {
    const [inputdata, setInputData] = useState({
        PermissionId: '00000000-0000-0000-0000-000000000000',
        PermissionName: '',
        CreatedDate: '2024-01-10T13:16:42.683'
    });
    const [getData, setData] = useState<
        {
            PermissionId: number;
            SNo: number;
            PermissionName: string;
            CreatedDate: Date;
        }[]
    >([]);
    interface columnNames {
        PermissionId: number;
        SNo: number;
        PermissionName: string;
        CreatedDate: Date;
    }
    const columns: any[] = [
        // { name: 'SNo', selector: (row: columnNames) => row.SNo, sortable: true, sortField: 'SNo', center: true },
        {
            name: 'NAME',
            selector: (row: columnNames) => row.PermissionName,
            sortable: true,
            sortField: 'PermissionName',
            // center: true
        },
        {
            name: 'ASSIGNED TO',
            // selector: (row: columnNames) => row.CreatedDate,
            // sortable: true,
            sortField: 'CreatedDate',
            // center: true
        },
        {
            name: 'CREATED DATE',
            selector: (row: columnNames) => row.CreatedDate,
            sortable: true,
            sortField: 'CreatedDate',
            // center: true
        },
        {
            name: 'ACTIONS',
            width: '190px',
            button: true,
            center: true,
            
        }
    ];
  return (
    <>
    <div>TablesEg</div>
    <Card>
    <Row>
        <Col xl={12}>
            <Card className="custom-card">
                <Card.Header>
                            <Card.Title>
                                Permission List
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-example1">
                                <Grid
                                    data={getData}
                                    columns={['NAME', 'ASSIGNED TO', 'CREATED DATE', 'ACTIONS']} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Card>
    </>
  )
}
export default TablesEg;