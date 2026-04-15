import svgPaths from "../../imports/svg-5eu2z7aw6z";
import imgProfile from "figma:asset/974ec84e2c98f039f7958af3eb21ff8280842039.png";

interface SocialProfile {
  network: string;
  username: string;
}

interface SocialProfilesProps {
  connectedProfiles: SocialProfile[];
  onConnect: (profile: SocialProfile) => void;
  onDisconnect: (network: string) => void;
  onContinue: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export default function SocialProfiles({
  connectedProfiles,
  onConnect,
  onDisconnect,
  onContinue,
  onSkip,
}: SocialProfilesProps) {
  const isConnected = (network: string) =>
    connectedProfiles.some((p) => p.network === network);

  const handleConnect = (network: string) => {
    if (isConnected(network)) {
      onDisconnect(network);
    } else {
      onConnect({ network, username: "@agorapulse" });
    }
  };

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
                  Tailor your content creation
                </p>
                <p className="font-['Averta_Std:Regular',sans-serif] leading-[18px] relative shrink-0 text-[#5d6a82] text-[14px] w-full">
                  Add your social profiles to assess your brand type, tone of
                  voice and brand guidelines
                </p>
              </div>

              {/* Form */}
              <div className="bg-white content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[8px] shrink-0 w-[430px]">
                {/* Social Tiles */}
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  {/* Facebook */}
                  <button
                    onClick={() => handleConnect("Facebook")}
                    className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#eaecef] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 24 24"
                          >
                            <g>
                              <path d={svgPaths.p25332e00} fill="white" />
                              <path d={svgPaths.p1639dd00} fill="#0866FF" />
                            </g>
                          </svg>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Averta_Std:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344563] text-[16px] w-full text-left">
                            Facebook
                          </p>
                        </div>
                        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[10px] right-[6px] rounded-[8px] top-[6px]">
                          <div className="relative shrink-0 size-[16px]">
                            <div className="absolute inset-[10%]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12.8 12.8"
                              >
                                <path
                                  d={svgPaths.p282138c0}
                                  fill="#858FA1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Instagram */}
                  <button
                    onClick={() => handleConnect("Instagram")}
                    className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#eaecef] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 23.9988 24.0004"
                          >
                            <g>
                              <path
                                d={svgPaths.p8dbbe00}
                                fill="url(#paint0_radial_ig)"
                              />
                              <path
                                d={svgPaths.p8dbbe00}
                                fill="url(#paint1_radial_ig)"
                              />
                            </g>
                            <defs>
                              <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="translate(3.18851 24.1138) scale(31.3297 31.3306)"
                                gradientUnits="userSpaceOnUse"
                                id="paint0_radial_ig"
                                r="1"
                              >
                                <stop offset="0.09" stopColor="#FA8F21" />
                                <stop offset="0.78" stopColor="#D82D7E" />
                              </radialGradient>
                              <radialGradient
                                cx="0"
                                cy="0"
                                gradientTransform="translate(14.5548 25.189) scale(24.6921 24.6928)"
                                gradientUnits="userSpaceOnUse"
                                id="paint1_radial_ig"
                                r="1"
                              >
                                <stop
                                  offset="0.64"
                                  stopColor="#8C3AAA"
                                  stopOpacity="0"
                                />
                                <stop offset="1" stopColor="#8C3AAA" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Averta_Std:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344563] text-[16px] w-full text-left">
                            Instagram
                          </p>
                        </div>
                        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[10px] right-[6px] rounded-[8px] top-[6px]">
                          <div className="relative shrink-0 size-[16px]">
                            <div className="absolute inset-[10%]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12.8 12.8"
                              >
                                <path
                                  d={svgPaths.p282138c0}
                                  fill="#858FA1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={() => handleConnect("LinkedIn")}
                    className="bg-white h-[48px] relative rounded-[8px] shrink-0 w-full"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute border border-[#eaecef] border-solid inset-0 pointer-events-none rounded-[8px]"
                    />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
                        <div className="overflow-clip relative shrink-0 size-[24px]">
                          <svg
                            className="absolute block size-full"
                            fill="none"
                            preserveAspectRatio="none"
                            viewBox="0 0 23.9998 24.0004"
                          >
                            <g>
                              <path d={svgPaths.pe54b160} fill="#2668B2" />
                              <path d={svgPaths.p32c87900} fill="white" />
                              <path d={svgPaths.p1b8bd400} fill="white" />
                            </g>
                          </svg>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
                          <p className="font-['Averta_Std:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#344563] text-[16px] w-full text-left">
                            LinkedIn
                          </p>
                        </div>
                        <div className="absolute content-stretch flex items-center justify-center overflow-clip p-[10px] right-[6px] rounded-[8px] top-[6px]">
                          <div className="relative shrink-0 size-[16px]">
                            <div className="absolute inset-[10%]">
                              <svg
                                className="absolute block size-full"
                                fill="none"
                                preserveAspectRatio="none"
                                viewBox="0 0 12.8 12.8"
                              >
                                <path
                                  d={svgPaths.p282138c0}
                                  fill="#858FA1"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                {/* Connected Profiles */}
                {connectedProfiles.length > 0 && (
                  <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['Averta_Std:Bold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5d6a82] text-[14px] w-full">
                      Connected profiles
                    </p>
                    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
                      {connectedProfiles.map((profile) => (
                        <div
                          key={profile.network}
                          className="bg-white flex-[1_0_0] max-w-[190px] min-h-px min-w-[150px] relative rounded-[8px]"
                        >
                          <div
                            aria-hidden="true"
                            className="absolute border border-[#eaecef] border-solid inset-0 pointer-events-none rounded-[8px]"
                          />
                          <div className="flex flex-col justify-center max-w-[inherit] min-w-[inherit] size-full">
                            <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] min-w-[inherit] p-[8px] relative w-full">
                              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                                <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                                  <div className="relative shrink-0 size-[32px]">
                                    <div className="absolute left-0 rounded-[50px] size-[32px] top-0">
                                      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
                                        <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
                                          <img
                                            alt=""
                                            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                                            src={imgProfile}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        aria-hidden="true"
                                        className="absolute border border-[#eaecef] border-solid inset-0 pointer-events-none rounded-[50px]"
                                      />
                                    </div>
                                    <div className="absolute bottom-0 right-0 size-[12px]">
                                      {profile.network === "Facebook" && (
                                        <div className="absolute inset-[-8.33%_-8.33%_-9.07%_-8.33%]">
                                          <svg
                                            className="block size-full"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 14 14.0888"
                                          >
                                            <g>
                                              <path
                                                d="M 0.500001 7.044391 C 0.500001 3.464845 3.387097 0.577749 6.966643 0.577749 L 7.033357 0.577749 C 10.61291 0.577749 13.5 3.464845 13.5 7.044391 L 13.5 7.111104 C 13.5 10.69065 10.61291 13.57775 7.033357 13.57775 L 6.966643 13.57775 C 3.387097 13.57775 0.500001 10.69065 0.500001 7.111104 L 0.500001 7.044391 Z"
                                                fill="white"
                                              />
                                              <path
                                                d="M 8.466652 4.533328 L 7.733326 4.533328 C 7.355543 4.533328 7.046652 4.842219 7.046652 5.220002 L 7.046652 5.953328 L 8.466652 5.953328 L 8.466652 7.373328 L 7.046652 7.373328 L 7.046652 11.77999 L 5.626652 11.77999 L 5.626652 7.373328 L 4.919985 7.373328 L 4.919985 5.953328 L 5.626652 5.953328 L 5.626652 5.220002 C 5.626652 4.058552 6.571876 3.113328 7.733326 3.113328 L 8.466652 3.113328 L 8.466652 4.533328 Z"
                                                fill="#0866FF"
                                              />
                                              <path
                                                d="M 0.500001 7.044391 C 0.500001 3.464845 3.387097 0.577749 6.966643 0.577749 L 7.033357 0.577749 C 10.61291 0.577749 13.5 3.464845 13.5 7.044391 L 13.5 7.111104 C 13.5 10.69065 10.61291 13.57775 7.033357 13.57775 L 6.966643 13.57775 C 3.387097 13.57775 0.500001 10.69065 0.500001 7.111104 L 0.500001 7.044391 Z"
                                                stroke="#EAECEF"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      )}
                                      {profile.network === "Instagram" && (
                                        <div className="absolute bg-[#eaecef] inset-0 rounded-[4.6px]">
                                          <div className="absolute inset-[-8.33%]">
                                            <svg
                                              className="block size-full"
                                              fill="none"
                                              preserveAspectRatio="none"
                                              viewBox="0 0 13.9995 14"
                                            >
                                              <g>
                                                <path
                                                  d="M 3.49997 1.000001 C 2.119289 1.000001 0.999971 2.119319 0.999971 3.500001 L 0.999971 10.5 C 0.999971 11.88068 2.119289 13 3.49997 13 L 10.49997 13 C 11.88065 13 12.99997 11.88068 12.99997 10.5 L 12.99997 3.500001 C 12.99997 2.119319 11.88065 1.000001 10.49997 1.000001 L 3.49997 1.000001 Z M 9.70997 3.200001 C 9.98471 3.200001 10.20997 3.42526 10.20997 3.700001 C 10.20997 3.974742 9.98471 4.200001 9.70997 4.200001 C 9.43523 4.200001 9.20997 3.974742 9.20997 3.700001 C 9.20997 3.42526 9.43523 3.200001 9.70997 3.200001 Z M 6.99997 4.200001 C 8.491 4.200001 9.69997 5.408972 9.69997 6.900001 C 9.69997 8.39103 8.491 9.600001 6.99997 9.600001 C 5.508941 9.600001 4.29997 8.39103 4.29997 6.900001 C 4.29997 5.408972 5.508941 4.200001 6.99997 4.200001 Z M 6.99997 5.200001 C 6.06111 5.200001 5.29997 5.961144 5.29997 6.900001 C 5.29997 7.838859 6.06111 8.600001 6.99997 8.600001 C 7.93883 8.600001 8.69997 7.838859 8.69997 6.900001 C 8.69997 5.961144 7.93883 5.200001 6.99997 5.200001 Z"
                                                  fill="url(#paint0_radial_ig_small)"
                                                />
                                                <path
                                                  d="M 3.49997 1.000001 C 2.119289 1.000001 0.999971 2.119319 0.999971 3.500001 L 0.999971 10.5 C 0.999971 11.88068 2.119289 13 3.49997 13 L 10.49997 13 C 11.88065 13 12.99997 11.88068 12.99997 10.5 L 12.99997 3.500001 C 12.99997 2.119319 11.88065 1.000001 10.49997 1.000001 L 3.49997 1.000001 Z M 9.70997 3.200001 C 9.98471 3.200001 10.20997 3.42526 10.20997 3.700001 C 10.20997 3.974742 9.98471 4.200001 9.70997 4.200001 C 9.43523 4.200001 9.20997 3.974742 9.20997 3.700001 C 9.20997 3.42526 9.43523 3.200001 9.70997 3.200001 Z M 6.99997 4.200001 C 8.491 4.200001 9.69997 5.408972 9.69997 6.900001 C 9.69997 8.39103 8.491 9.600001 6.99997 9.600001 C 5.508941 9.600001 4.29997 8.39103 4.29997 6.900001 C 4.29997 5.408972 5.508941 4.200001 6.99997 4.200001 Z M 6.99997 5.200001 C 6.06111 5.200001 5.29997 5.961144 5.29997 6.900001 C 5.29997 7.838859 6.06111 8.600001 6.99997 8.600001 C 7.93883 8.600001 8.69997 7.838859 8.69997 6.900001 C 8.69997 5.961144 7.93883 5.200001 6.99997 5.200001 Z"
                                                  fill="url(#paint1_radial_ig_small)"
                                                />
                                                <path
                                                  d="M 3.49997 1.000001 C 2.119289 1.000001 0.999971 2.119319 0.999971 3.500001 L 0.999971 10.5 C 0.999971 11.88068 2.119289 13 3.49997 13 L 10.49997 13 C 11.88065 13 12.99997 11.88068 12.99997 10.5 L 12.99997 3.500001 C 12.99997 2.119319 11.88065 1.000001 10.49997 1.000001 L 3.49997 1.000001 Z M 9.70997 3.200001 C 9.98471 3.200001 10.20997 3.42526 10.20997 3.700001 C 10.20997 3.974742 9.98471 4.200001 9.70997 4.200001 C 9.43523 4.200001 9.20997 3.974742 9.20997 3.700001 C 9.20997 3.42526 9.43523 3.200001 9.70997 3.200001 Z M 6.99997 4.200001 C 8.491 4.200001 9.69997 5.408972 9.69997 6.900001 C 9.69997 8.39103 8.491 9.600001 6.99997 9.600001 C 5.508941 9.600001 4.29997 8.39103 4.29997 6.900001 C 4.29997 5.408972 5.508941 4.200001 6.99997 4.200001 Z M 6.99997 5.200001 C 6.06111 5.200001 5.29997 5.961144 5.29997 6.900001 C 5.29997 7.838859 6.06111 8.600001 6.99997 8.600001 C 7.93883 8.600001 8.69997 7.838859 8.69997 6.900001 C 8.69997 5.961144 7.93883 5.200001 6.99997 5.200001 Z"
                                                  stroke="#EAECEF"
                                                  strokeWidth="2"
                                                />
                                              </g>
                                              <defs>
                                                <radialGradient
                                                  cx="0"
                                                  cy="0"
                                                  gradientTransform="translate(2.59427 13.0567) scale(15.665)"
                                                  gradientUnits="userSpaceOnUse"
                                                  id="paint0_radial_ig_small"
                                                  r="1"
                                                >
                                                  <stop
                                                    offset="0.09"
                                                    stopColor="#FA8F21"
                                                  />
                                                  <stop
                                                    offset="0.78"
                                                    stopColor="#D82D7E"
                                                  />
                                                </radialGradient>
                                                <radialGradient
                                                  cx="0"
                                                  cy="0"
                                                  gradientTransform="translate(8.27747 13.5943) scale(12.3462)"
                                                  gradientUnits="userSpaceOnUse"
                                                  id="paint1_radial_ig_small"
                                                  r="1"
                                                >
                                                  <stop
                                                    offset="0.64"
                                                    stopColor="#8C3AAA"
                                                    stopOpacity="0"
                                                  />
                                                  <stop
                                                    offset="1"
                                                    stopColor="#8C3AAA"
                                                  />
                                                </radialGradient>
                                              </defs>
                                            </svg>
                                          </div>
                                        </div>
                                      )}
                                      {profile.network === "LinkedIn" && (
                                        <div className="absolute inset-[-8.33%]">
                                          <svg
                                            className="block size-full"
                                            fill="none"
                                            preserveAspectRatio="none"
                                            viewBox="0 0 14 14"
                                          >
                                            <g>
                                              <path
                                                d="M 12.55556 1 L 1.444444 1 C 1.198986 1 1 1.198986 1 1.444444 L 1 12.55556 C 1 12.80101 1.198986 13 1.444444 13 L 12.55556 13 C 12.80101 13 13 12.80101 13 12.55556 L 13 1.444444 C 13 1.198986 12.80101 1 12.55556 1 Z M 4.6 11.33333 L 2.933333 11.33333 L 2.933333 5.733333 L 4.6 5.733333 L 4.6 11.33333 Z M 3.766667 4.966667 C 3.305 4.966667 2.933333 4.595 2.933333 4.133333 C 2.933333 3.671667 3.305 3.3 3.766667 3.3 C 4.228333 3.3 4.6 3.671667 4.6 4.133333 C 4.6 4.595 4.228333 4.966667 3.766667 4.966667 Z M 11.33333 11.33333 L 9.666667 11.33333 L 9.666667 8.533333 C 9.666667 7.8 9.2 7.333333 8.466667 7.333333 C 7.733333 7.333333 7.266667 7.8 7.266667 8.533333 L 7.266667 11.33333 L 5.6 11.33333 L 5.6 5.733333 L 7.266667 5.733333 L 7.266667 6.533333 C 7.466667 6.133333 8.066667 5.6 8.933333 5.6 C 10.06667 5.6 11.33333 6.4 11.33333 8.066667 L 11.33333 11.33333 Z"
                                                fill="#2668B2"
                                              />
                                              <path
                                                d="M 4.6 11.33333 L 2.933333 11.33333 L 2.933333 5.733333 L 4.6 5.733333 L 4.6 11.33333 Z M 3.766667 4.966667 C 3.305 4.966667 2.933333 4.595 2.933333 4.133333 C 2.933333 3.671667 3.305 3.3 3.766667 3.3 C 4.228333 3.3 4.6 3.671667 4.6 4.133333 C 4.6 4.595 4.228333 4.966667 3.766667 4.966667 Z"
                                                fill="white"
                                              />
                                              <path
                                                d="M 11.33333 11.33333 L 9.666667 11.33333 L 9.666667 8.533333 C 9.666667 7.8 9.2 7.333333 8.466667 7.333333 C 7.733333 7.333333 7.266667 7.8 7.266667 8.533333 L 7.266667 11.33333 L 5.6 11.33333 L 5.6 5.733333 L 7.266667 5.733333 L 7.266667 6.533333 C 7.466667 6.133333 8.066667 5.6 8.933333 5.6 C 10.06667 5.6 11.33333 6.4 11.33333 8.066667 L 11.33333 11.33333 Z"
                                                fill="white"
                                              />
                                              <path
                                                d="M 12.55556 1 L 1.444444 1 C 1.198986 1 1 1.198986 1 1.444444 L 1 12.55556 C 1 12.80101 1.198986 13 1.444444 13 L 12.55556 13 C 12.80101 13 13 12.80101 13 12.55556 L 13 1.444444 C 13 1.198986 12.80101 1 12.55556 1 Z"
                                                stroke="#EAECEF"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[0] min-h-px min-w-px not-italic relative whitespace-nowrap">
                                    <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] h-[20px] justify-center overflow-hidden relative shrink-0 text-[#344563] text-[14px] text-ellipsis w-full">
                                      <p className="leading-[18px] overflow-hidden text-ellipsis">
                                        Agorapulse
                                      </p>
                                    </div>
                                    <div className="flex flex-col font-['Averta_Std:Regular',sans-serif] justify-center overflow-hidden relative shrink-0 text-[#5d6a82] text-[12px] text-ellipsis w-full">
                                      <p className="leading-[16px] overflow-hidden text-ellipsis">
                                        {profile.username}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => onDisconnect(profile.network)}
                                  className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[8px] shrink-0"
                                >
                                  <div className="relative shrink-0 size-[16px]">
                                    <div className="absolute inset-[20.25%]">
                                      <svg
                                        className="absolute block size-full"
                                        fill="none"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 9.51967 9.51978"
                                      >
                                        <path
                                          d="M 0 0.706893 L 0.706893 0 L 4.759835 4.052942 L 8.812777 0 L 9.519669 0.706893 L 5.466727 4.759835 L 9.519669 8.812777 L 8.812777 9.519669 L 4.759835 5.466727 L 0.706893 9.519669 L 0 8.812777 L 4.052942 4.759835 L 0 0.706893 Z"
                                          fill="#858FA1"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Buttons */}
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
                    <button
                      onClick={onSkip}
                      className="flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]"
                    >
                      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative size-full">
                          <div className="flex flex-col font-['Averta_Std:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#178dfe] text-[14px] text-center whitespace-nowrap">
                            <p className="leading-[20px]">Skip for now</p>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button
                      onClick={onContinue}
                      className="bg-[#578fff] flex-[1_0_0] h-[36px] min-h-px min-w-px relative rounded-[4px]"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
