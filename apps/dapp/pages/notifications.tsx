import {
      useGetAllAssetsLazyQuery,
    } from '@da-tokenization/database';
    import { NextPageWithLayout } from './_app';
    
    import Router from 'next/router';
    import React from 'react';
   
    const Page: NextPageWithLayout = () => {
      // Fetch assets data
    
      
      // console.log('Asset details', tableData);
      // if (assetDataLoading) return <p>Loading...</p>;
      return (
        <>
          <div className="header-area">
            <h2>Notifications</h2>
           
          </div>
         
        </>
      );
    };
    export default Page;
    