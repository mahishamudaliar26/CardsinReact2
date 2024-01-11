import React from 'react';
import { Grid } from "gridjs-react";
import { useState, useEffect } from 'react';
import { Card , Row, Col} from 'react-bootstrap';
import { Data } from './data';


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
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} />
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