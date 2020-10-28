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

import productsData from "./ProductsData";

const Products = () => {
  const history = useHistory()
  return (
    <CRow>
      <CCol className="mb-4" xl={2}>
        <CButton className="btn-block" color="primary" variant="outline" size="sm">
          <CIcon name="cil-playlist-add" />
          <span className="pl-3 align-middle">New Product</span>
        </CButton>
      </CCol>
      <CCol className="mb-4" xl={2}>
        <CButton className="btn-block" color="primary" variant="outline" size="sm">
          <CIcon name="cil-plus" />
          <span className="pl-3 align-middle">Receiving</span>
        </CButton>
      </CCol>
      <CCol className="mb-4" xl={2}>
        <CButton className="btn-block" color="primary" variant="outline" size="sm">
          <CIcon name="cil-minus" />
          <span className="pl-3  align-middle">Picking</span>
        </CButton>
      </CCol>
      <CCol className="mb-4" xl={12}>
        <CCard>
          <CCardBody>
            <CDataTable
              items={productsData}
              fields={[
                { key: "itemCode", _classes: "font-weight-bold" },
                "description",
                "model",
                "brand",
              ]}
              columnFilter
              tableFilter
              pagination
              hover
              // striped
              // size="md"
              sorter
              itemsPerPage={10}
              activePage={1}
              clickableRows
              onRowClick={(item) => history.push(`/products/${item.id}`)}
              // scopedSlots = {{
              //   'status':
              //     (item)=>(
              //       <td>
              //         <CBadge color={getBadge(item.status)}>
              //           {item.status}
              //         </CBadge>
              //       </td>
              //     )
              // }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Products;
