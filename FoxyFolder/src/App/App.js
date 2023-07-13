import React, { Suspense } from 'react';
const MFText = React.lazy(() => import('crabApp/MFText'));

export const App = () => {
    return (
        <>
            <Suspense fallback={<div>...load</div>}>
                <MFText text={'dsfsdf'} />
            </Suspense>
        </>
    );
};
