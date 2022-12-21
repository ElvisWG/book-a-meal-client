import React from 'react';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBTn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBCard>
        <MDBCardBody>
        <MDBCardTitle>Card Title</MDBCardTitle>
        <MDBCardText>Description of the Item</MDBCardText>
        <MDBBTn>Button</MDBBTn>
        </MDBCardBody>
        </MDBCard>
    );
}