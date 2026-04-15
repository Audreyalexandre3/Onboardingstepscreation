import svgPaths from "../../imports/svg-mwwk5i43h4";

interface EmailVerificationProps {
  email: string;
  verificationCode: string;
  onCodeChange: (code: string) => void;
  onContinue: () => void;
  onBack: () => void;
}

export default function EmailVerification({
  email,
  verificationCode,
  onCodeChange,
  onContinue,
  onBack,
}: EmailVerificationProps) {
  return (
    <div
      className="content-stretch flex items-center relative size-full"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 740\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(80.7 1.6616e-13 0.0000029363 139.59 640 740)\\'><stop stop-color=\\'rgba(245,241,255,1)\\' offset=\\'0.31731\\'/><stop stop-color=\\'rgba(240,201,255,1)\\' offset=\\'0.51202\\'/><stop stop-color=\\'rgba(234,161,255,1)\\' offset=\\'0.70673\\'/><stop stop-color=\\'rgba(161,152,255,1)\\' offset=\\'0.85337\\'/><stop stop-color=\\'rgba(124,148,255,1)\\' offset=\\'0.92668\\'/><stop stop-color=\\'rgba(87,143,255,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
      }}
    >
      <div className="flex-[1_0_0] h-[740px] min-h-px min-w-px relative">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col gap-[48px] items-center justify-center px-[80px] py-[40px] relative size-full">
            <div className="absolute bg-[#d9d9d9] left-[12px] rounded-[8px] size-[40px] top-[12px]" />
            <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[430px] relative shrink-0 w-full">
              {/* Header */}
              <div className="content-stretch flex flex-col gap-[4px] items-center not-italic relative shrink-0 w-[430px]">
                <p className="font-['Averta_Std:Bold',sans-serif] leading-[32px] relative shrink-0 text-[#344563] text-[24px] w-full">
                  Welcome to Content Studio
                </p>
                <p className="font-['Averta_Std:Regular',sans-serif] leading-[24px] relative shrink-0 text-[#5d6a82] text-[16px] w-full">
                  Start using it for free. No credit card needed.
                </p>
              </div>

              {/* Form */}
              <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[8px] shrink-0 w-[430px]">
                {/* Google Sign Up Button */}
                <button className="h-[36px] relative rounded-[4px] shrink-0 w-full">
                  <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <svg
                          className="absolute block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 16 16"
                        >
                          <g>
                            <path d={svgPaths.p2bb7db00} fill="#EA4335" />
                            <path d={svgPaths.p365c7580} fill="#4285F4" />
                            <path d={svgPaths.p33e10600} fill="#FBBC05" />
                            <path d={svgPaths.p33cdf00} fill="#34A853" />
                          </g>
                        </svg>
                      </div>
                      <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
                        <p className="leading-[20px]">Sign up with Google</p>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                  />
                </button>

                {/* Divider */}
                <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                  <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 172 1"
                      >
                        <line stroke="#D6DAE0" x2="172" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                  <p className="font-['Averta_Std:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
                    or
                  </p>
                  <div className="flex-[1_0_0] h-0 min-h-px min-w-px relative">
                    <div className="absolute inset-[-1px_0_0_0]">
                      <svg
                        className="block size-full"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 172 1"
                      >
                        <line stroke="#D6DAE0" x2="172" y1="0.5" y2="0.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Form Body */}
                <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
                    {/* Email Input */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[382px]">
                      <div className="content-stretch flex items-center relative shrink-0 w-full">
                        <p className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#344563] text-[14px]">
                          Enter business email
                        </p>
                      </div>
                      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full">
                        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[9px] relative size-full">
                            <p className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#344563] text-[14px] text-ellipsis whitespace-nowrap">
                              {email}
                            </p>
                          </div>
                        </div>
                        <div
                          aria-hidden="true"
                          className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                        />
                      </div>
                    </div>

                    {/* Verification Code Input */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[382px]">
                        <div className="content-stretch flex items-center relative shrink-0 w-full">
                          <p className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic relative text-[#344563] text-[14px]">
                            Enter verification code
                          </p>
                        </div>
                        <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[9px] relative size-full">
                              <input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => onCodeChange(e.target.value)}
                                placeholder="000000"
                                className="flex-[1_0_0] font-['Averta_Std:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#344563] text-[14px] text-ellipsis whitespace-nowrap bg-transparent border-none outline-none"
                              />
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                          />
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <button className="font-['Averta_Std:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0e72d6] text-[14px] whitespace-nowrap">
                          Resend code
                        </button>
                      </div>
                    </div>

                    {/* Email Provider Buttons */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                      <p className="font-['Averta_Std:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#5d6a82] text-[12px] whitespace-nowrap">
                        Go directly on your email provider
                      </p>
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
                        <button className="h-[36px] relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                              >
                                <g>
                                  <path d={svgPaths.p2bb7db00} fill="#EA4335" />
                                  <path d={svgPaths.p365c7580} fill="#4285F4" />
                                  <path d={svgPaths.p33e10600} fill="#FBBC05" />
                                  <path d={svgPaths.p33cdf00} fill="#34A853" />
                                </g>
                              </svg>
                            </div>
                            <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[20px]">Gmail</p>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                          />
                        </button>
                        <button className="h-[36px] relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="absolute inset-[15%_5%]">
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 14.4 11.2"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d={svgPaths.p369e400}
                                    fill="#5D6A82"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[20px]">Outlook</p>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                          />
                        </button>
                        <button className="h-[36px] relative rounded-[4px] shrink-0">
                          <div className="content-stretch flex gap-[8px] h-full items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit]">
                            <div className="overflow-clip relative shrink-0 size-[16px]">
                              <div className="absolute inset-[15%_5%]">
                                <svg
                                  className="absolute block size-full"
                                  fill="none"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 14.4 11.2"
                                >
                                  <path
                                    clipRule="evenodd"
                                    d={svgPaths.p369e400}
                                    fill="#5D6A82"
                                    fillRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#5d6a82] text-[14px] text-center whitespace-nowrap">
                              <p className="leading-[20px]">Mail</p>
                            </div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="absolute border border-[#d6dae0] border-solid inset-0 pointer-events-none rounded-[4px]"
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <button
                      onClick={onContinue}
                      className="bg-[#578fff] h-[36px] relative rounded-[4px] shrink-0 w-full"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                          <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                            <p className="leading-[20px]">Continue</p>
                          </div>
                          <div className="overflow-clip relative shrink-0 size-[16px]">
                            <div className="absolute inset-[15%_5%]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 14.4 11.2"
                              >
                                <path d={svgPaths.p2b10db80} fill="white" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[430px]">
                <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] whitespace-nowrap">
                  Already have an account?
                </p>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                  <button className="font-['Averta_Std:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0e72d6] text-[14px] whitespace-nowrap">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
