import React from 'react'

import { Link } from 'react-router-dom';
import SVG from '../../UI/app/SVG';
import { CLOSE } from '../../../utils/ButtonLinkObjects';

const StepsHeader = () => {
  return (

    <div className="flex items-center sticky top-0 bg-[#fff] z-50 h-[3.313rem] w-[600px] max-w-[600px]">
        <Link
          role="button"
          to={"/"}
          className="ml-4 hover:bg-[#E6E7E7] w-[2.125rem] h-[2.125rem] flex items-center justify-center rounded-full cursor-pointer"
        >
          <div className="w-[1.25rem] h-[1.25rem]">
            <SVG svgPath={CLOSE} />
          </div>
        </Link>
        <span className="ml-6 text-xl font-cBold">Step 1 of 5</span>
      </div>
  )
}

export default StepsHeader;
