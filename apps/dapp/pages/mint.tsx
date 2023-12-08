import { AppLayout, TokenCard } from '@da-tokenization/components';
import { ReactElement } from 'react';
import { MintBatch } from '@da-tokenization/components';
import { useModalContext } from '@da-tokenization/providers';
import { NextPageWithLayout } from './_app';
import Router from 'next/router';


const Page: NextPageWithLayout = () => {
  const { setModal } = useModalContext();

  return (
    <div>
      <div className='header-area'>
        {/* <div className='add-btn'>
          <button onClick={()=>Router.push("/createToken")} className="create-btn">Create Token</button>
        </div> */}
        <h2>Global Treasury </h2>
      </div>
      <TokenCard />
      <button
        onClick={() =>
          setModal({
            component: (
              <div>
                <MintBatch />
              </div>
            ),
          })
        }
      >
        Mint Batch
      </button>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};
export default Page;
