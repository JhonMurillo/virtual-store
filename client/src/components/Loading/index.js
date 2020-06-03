import React from 'react'
import { Spinner } from 'reactstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


export const Loading = ({ showSpinner, IsSkeleton, colsSkeleton }) => {
  if(!showSpinner && IsSkeleton){
    return (
      <>
        <SkeletonTheme color="#dcd4d4" highlightColor="#efe8e8">
            <Skeleton count={colsSkeleton}/>
        </SkeletonTheme>
      </>
      )
  }else{
    return (
    <>
      { showSpinner && 
        <Spinner color="primary" />
      }
    </>
    )
  }
}
