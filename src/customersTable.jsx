import React from 'react';
import {Table, Grid, Row, Col} from 'react-bootstrap';

class CustomersTable extends React.Component{
	render(){
		return(
			<Grid>
				<Row>
			      <Table responsive>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Addres</th>
                        <th>Phone</th>
                      </tr>   
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
						<td>Table cell</td>   
                      </tr>
                    </tbody>
          	      </Table>
				</Row>
			</Grid>
		);
	}
}
export default CustomersTable;