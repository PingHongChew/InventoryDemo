import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import customersData from "./CustomersData";

const Customers = () => {
  const history = useHistory()
  return (
    <CRow>
      <CCol className="mb-4" xl={2}>
        <CButton className="btn-block" color="primary" variant="outline" size="sm">
          <CIcon name="cil-playlist-add" />
          <span className="pl-3 align-middle">New Customer</span>
        </CButton>
      </CCol>
      <CCol className="mb-4" xl={12}>
        <CCard>
          <CCardBody>
            <CDataTable
              items={customersData}
              columnFilter
              tableFilter
              pagination
              hover
              sorter
              itemsPerPage={10}
              activePage={1}
              clickableRows
              onRowClick={(item) => history.push(`/customers/${item.id}`)}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Customers;
