import svgPaths from "./svg-4xctp8jwdu";

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[430px]">
      <p className="font-['Averta_Std:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#344563] text-[24px] w-full">Let’s set you up</p>
    </div>
  );
}

function FormsFields() {
  return (
    <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name=".forms_fields">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[9px] relative size-full">
          <p className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#344563] text-[14px] text-ellipsis whitespace-nowrap">****</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function PasswordLine() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="password line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left Icon">
        <div className="absolute inset-[5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
            <g id="Vector">
              <path d={svgPaths.p31f72800} fill="#858FA1" />
              <path clipRule="evenodd" d={svgPaths.p4bd2af0} fill="#858FA1" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] whitespace-nowrap">1 uppercase</p>
    </div>
  );
}

function PasswordLine1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="password line">
      <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
        <div className="absolute inset-[5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
            <path clipRule="evenodd" d={svgPaths.p1c16bc00} fill="var(--fill-0, #45B854)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] whitespace-nowrap">1 lowercase</p>
    </div>
  );
}

function PasswordLine2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="password line">
      <div className="relative shrink-0 size-[16px]" data-name="Left Icon">
        <div className="absolute inset-[5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
            <path clipRule="evenodd" d={svgPaths.p1c16bc00} fill="var(--fill-0, #45B854)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] whitespace-nowrap">1 number</p>
    </div>
  );
}

function PasswordLine3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="password line">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left Icon">
        <div className="absolute inset-[5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
            <g id="Vector">
              <path d={svgPaths.p31f72800} fill="#858FA1" />
              <path clipRule="evenodd" d={svgPaths.p4bd2af0} fill="#858FA1" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] whitespace-nowrap">8 characters minimum</p>
    </div>
  );
}

function PasswordVerifications() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[168px]" data-name="Password verifications">
      <PasswordLine />
      <PasswordLine1 />
      <PasswordLine2 />
      <PasswordLine3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Form - Input">
        <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Label">
          <p className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#344563] text-[14px]">Create a password</p>
        </div>
        <FormsFields />
      </div>
      <PasswordVerifications />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left Icon">
              <div className="absolute inset-[15%_5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 11.2">
                  <path d={svgPaths.p2d8f3c00} fill="var(--fill-0, #5D6A82)" id="Vector" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
              <p className="leading-[20px]">Back</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#578fff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[20px]">Continue</p>
            </div>
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Right Icon">
              <div className="absolute inset-[15%_5%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 11.2">
                  <path d={svgPaths.p2b10db80} fill="var(--fill-0, white)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="body">
      <Frame1 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center p-[24px] relative rounded-[8px] shrink-0 w-[430px]" data-name="Form">
      <Body />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[430px] relative shrink-0 w-full">
      <Frame />
      <Form />
    </div>
  );
}

function Right() {
  return (
    <div className="flex-[1_0_0] h-[740px] min-h-px min-w-px relative" data-name="right">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[80px] py-[40px] relative size-full">
          <div className="absolute bg-[#d9d9d9] left-[12px] rounded-[8px] size-[40px] top-[12px]" />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function V() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-name="V3-4" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 740\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.7 1.6616e-13 0.0000029363 139.59 640 740)\\'><stop stop-color=\\'rgba(245,241,255,1)\\' offset=\\'0.31731\\'/><stop stop-color=\\'rgba(240,201,255,1)\\' offset=\\'0.51202\\'/><stop stop-color=\\'rgba(234,161,255,1)\\' offset=\\'0.70673\\'/><stop stop-color=\\'rgba(161,152,255,1)\\' offset=\\'0.85337\\'/><stop stop-color=\\'rgba(124,148,255,1)\\' offset=\\'0.92668\\'/><stop stop-color=\\'rgba(87,143,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }}>
      <Right />
    </div>
  );
}