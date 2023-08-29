import React from 'react'

import { MORE } from '../../../utils/ButtonLinkObjects';

import SVG from "../../UI/app/SVG";

const MoreOptions = (type) => {


  return (
    <> 
    <div className='w-[18.75px]'> 
      <SVG svgPath={MORE}/>
    </div>
    
    </>
    

  )
}

export default MoreOptions;
