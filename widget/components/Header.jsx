const { basePath, param, page, docName } = props;

const { get } = VM.require("${config_account}/widget/utils.db") || {
  get: () => {},
};

const documents = get();

// Preprocess documents to group paths by their parent sections
const groupedSections = {};
Object.keys(documents).forEach((path) => {
  const parts = path.split("/");
  const parentSection = parts[0];
  const childSection = parts.length > 1 ? parts[1] : null;

  if (!groupedSections[parentSection]) {
    groupedSections[parentSection] = [];
  }

  // Ensure child section is only added once per parent section
  if (childSection && !groupedSections[parentSection].includes(childSection)) {
    groupedSections[parentSection].push(childSection);
  }
});

const NearIcon = () => {
  return (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1656 567">
      <g>
        <path d="m703.42,157.72c-26.61,0-45.96,6.29-62.4,20.8l-29.03,25.15c-2.42,1.94-7.26,3.39-10.64.48-3.39-2.9-3.87-6.77-.97-10.64l15.48-23.22c2.42-3.39.49-7.74-3.87-7.74h-37.25c-4.35,0-7.74,3.39-7.74,7.74v226.4c0,4.35,3.39,7.74,7.74,7.74h38.7c4.35,0,7.74-3.39,7.74-7.74v-127.71c0-58.53,48.86-67.72,67.24-67.72,39.18,0,53.21,28.06,53.21,49.34v146.09c0,4.35,3.39,7.74,7.74,7.74h38.7c4.35,0,7.74-3.39,7.74-7.74v-150.93c0-54.18-35.32-88.04-92.4-88.04Z" />
        <path d="m953.5,156.75c-74.98,0-122.87,45.96-122.87,108.36v34.35c0,65.79,47.89,110.78,122.87,110.78,66.27,0,112.71-34.35,117.55-80.79.49-4.84-2.9-8.22-7.74-8.22h-37.73c-3.39,0-6.29,1.94-7.26,5.32-4.84,15.48-27.57,38.7-64.82,38.7s-72.08-27.09-71.6-65.79l.49-43.05c.48-32.41,34.35-54.66,71.11-54.66,33.38,0,65.79,18.87,69.17,49.83h0c.28,3.58-2.18,6.81-5.71,7.49l-108.46,21.05c-4.35.97-7.74,4.84-7.74,9.67v.48c0,4.35,4.35,8.22,10.64,8.22h155.77c4.28,0,7.74-3.47,7.74-7.74v-30.47c0-57.56-49.83-103.52-121.42-103.52Z" />
        <path d="m1223.42,156.75c-60.47,0-112.71,35.31-112.71,81.75,0,3.87,3.39,6.77,7.74,6.77h39.18c3.87,0,6.77-2.9,7.26-6.77,3.87-21.28,29.51-36.76,57.08-36.76,32.89,0,55.15,20.32,55.15,55.15v42.09c0,43.05-31.93,64.82-71.6,64.82-30.96,0-48.86-11.61-48.86-30.48,0-16.45,8.71-30.48,44.5-38.7l51.76-14.03c5.32-1.45,7.26-5.81,6.29-10.64-.48-3.87-4.83-5.81-8.71-5.81h-53.69c-45.47,0-91.43,29.02-91.43,71.59v6.77c0,43.54,41.12,66.27,88.04,66.27,29.99,0,55.63-11.61,71.59-25.15l23.71-20.32c3.87-3.39,7.74-3.39,11.12,0,2.9,2.9,1.93,7.26-.49,10.64l-14.51,22.74c-2.42,3.39-.49,7.74,3.87,7.74h34.83c4.35,0,7.74-3.39,7.74-7.74v-146.58c0-56.11-40.15-93.36-107.88-93.36Z" />
        <path d="m1540.26,162.56h-54.18c-18.86,0-37.25,11.61-50.31,22.74l-21.28,18.38c-2.42,1.94-6.78,3.39-9.68.97-3.39-2.42-4.84-7.26-1.93-11.13l15.48-23.22c2.42-3.39.49-7.74-3.87-7.74h-36.28c-4.35,0-7.74,3.39-7.74,7.74v226.4c0,4.35,3.39,7.74,7.74,7.74h39.67c4.35,0,7.74-3.39,7.74-7.74v-116.1c0-49.83,20.32-72.08,64.34-72.08h50.31c4.35,0,7.74-3.39,7.74-7.74v-30.48c0-4.35-3.39-7.74-7.74-7.74Z" />
      </g>
      <path d="m421.61,108c-13,0-25.07,6.74-31.88,17.82l-73.37,108.93c-2.39,3.59-1.42,8.43,2.17,10.82,2.91,1.94,6.76,1.7,9.41-.58l72.22-62.64c1.2-1.08,3.05-.97,4.13.23.49.55.75,1.26.75,1.99v196.12c0,1.62-1.31,2.92-2.93,2.92-.87,0-1.69-.38-2.24-1.05L181.56,121.24c-7.11-8.39-17.55-13.23-28.54-13.24h-7.63c-20.65,0-37.39,16.74-37.39,37.39v276.22c0,20.65,16.74,37.39,37.39,37.39,13,0,25.07-6.74,31.88-17.82l73.37-108.93c2.39-3.59,1.42-8.43-2.17-10.82-2.91-1.94-6.76-1.7-9.41.58l-72.22,62.64c-1.2,1.08-3.05.97-4.13-.23-.49-.55-.75-1.26-.74-1.99v-196.17c0-1.62,1.31-2.92,2.93-2.92.86,0,1.69.38,2.24,1.05l218.28,261.37c7.11,8.39,17.55,13.23,28.54,13.24h7.63c20.65.01,37.4-16.72,37.42-37.37V145.39c0-20.65-16.74-37.39-37.39-37.39Z" />
    </svg>
  );
};

const Button = styled.div`
  font-size: 18px;
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileLinks = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  a {
    color: black !important;
    text-decoration: none;
  }

  margin-bottom: 1rem;
`;

return (
  <>
    <div className="header  text-black">
      <div className="header-content">
        <Button
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <i className="text-black bi bi-list"></i>
        </Button>
        <a href="https://near.org/" target="_blank">
          <NearIcon />
        </a>
        <a href="everything.dev" className="fw-bold">
          {docName ? docName : "BOS Workspace Docs"}
        </a>
        <DesktopLinks>
          {props.headerRoutes.length > 0 &&
            props.headerRoutes.map((item) => (
              <a href={item.path} target="/blank">
                {item.label}
              </a>
            ))}
        </DesktopLinks>
      </div>
      <Link
        to={props[param] === "settings" ? `/${basePath}` : `/${basePath}?${param}=settings`}
        className="icon text-black"
      >
        <i className="bi bi-gear"></i>
      </Link>
    </div>
    <div
      className="offcanvas offcanvas-start"
      tabindex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h4 className="offcanvas-title fw-bolder" id="offcanvasExampleLabel">
          Menu
        </h4>
        <button
          type="button"
          className="btn-close text-reset me-1"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="sidebar-mobile text-black">
          <MobileLinks>
            <h5 className="fw-bold">Resources</h5>
            {props.headerRoutes.length > 0 &&
              props.headerRoutes.map((item) => (
                <a href={item.path} target="/blank">
                  {item.label}
                </a>
              ))}
          </MobileLinks>
          <div>
            <h5 className="fw-bold">Pages</h5>
            {Object.keys(groupedSections).map((parentSection) => (
              <div className="parent-section" key={parentSection}>
                {/* Render parent section */}
                <div className="parent-section">
                  <Link to={`/${basePath}?${param}=${parentSection}`}>
                    {/* <button>{documents[parentSection].title}</button> */}
                    <button className={props.page === parentSection ? "active" : ""}>
                      {documents[parentSection].title}
                    </button>
                  </Link>
                </div>

                {/* Render child sections */}
                <div className="nested-section">
                  {groupedSections[parentSection].map((childSection) => (
                    <div className="child-section" key={childSection}>
                      <Link to={`/${basePath}?${param}=${parentSection}/${childSection}`}>
                        <button
                          className={
                            props.page === `${parentSection}/${childSection}` ? "active" : ""
                          }
                        >
                          {documents[`${parentSection}/${childSection}`].title}
                        </button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
);
