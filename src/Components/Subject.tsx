import { toUSVString } from "util";

export default function Section({
  title,
  obj,
  search,
  steps,
}: {
  title: string;
  obj: any;
  search: string;
  steps?: number[];
}) {
  function showLines(
    lines: [],
    subject: string,
    category?: string,
    subcategory?: string
  ) {
    let filteredLines = getLines(lines);

    return filteredLines.map((line: string) => {
      return (
        <div
          className="line"
          onClick={(e) =>
            copyToClipboard({
              e,
              subject,
              category,
              subcategory,
              line,
            })
          }
        >
          {line}
        </div>
      );
    });
  }

  function copyToClipboard({
    e,
    subject,
    category,
    subcategory,
    line,
  }: {
    e: any;
    subject: string;
    category?: string;
    subcategory?: string;
    line: string;
  }) {
    let headingEle = document.createElement("div");
    let subheadingEle = document.createElement("div");
    let subsubheadingEle = document.createElement("div");
    let lineEle = document.createElement("div");

    headingEle.textContent = subject;
    headingEle.style.backgroundColor = "#8885c0";
    headingEle.style.display = "inline-block";
    headingEle.style.fontFamily = "Century Gothic";
    document.body.appendChild(headingEle);

    if (category) {
      subheadingEle.textContent = category;
      subheadingEle.style.backgroundColor = "#aaaaaa";
      subheadingEle.style.display = "inline-block";
      subheadingEle.style.fontFamily = "Century Gothic";
      document.body.appendChild(subheadingEle);
    }
    if (subcategory) {
      subsubheadingEle.textContent = subcategory;
      subsubheadingEle.style.backgroundColor = "#ff99ff";
      subsubheadingEle.style.display = "inline-block";
      subsubheadingEle.style.fontFamily = "Century Gothic";
      document.body.appendChild(subsubheadingEle);
    }

    lineEle.textContent = line;
    lineEle.style.backgroundColor = "#66ccff";
    lineEle.style.display = "inline-block";
    lineEle.style.fontFamily = "Century Gothic";
    document.body.appendChild(lineEle);

    // Create a range object and select the combined content
    var range = document.createRange();
    range.selectNode(headingEle);
    range.setEndAfter(lineEle); // Selects up to the end of the second element

    // Add the selected content to the clipboard
    var selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    try {
      // Execute the copy command
      document.execCommand("copy");

      let popup = document.createElement("div");
      popup.style.display = "block";
      popup.style.position = "absolute";
      popup.style.backgroundColor = "lightgrey";
      popup.style.padding = "4px";
      popup.style.borderRadius = "8px";
      popup.style.left = `${e.pageX}px`;
      popup.style.top = `${e.pageY}px`;
      popup.style.zIndex = "99999";
      popup.style.opacity = ".85";
      popup.textContent = "Copied to Clipboard";
      document.body.appendChild(popup);

      setTimeout(() => {
        document.body.removeChild(popup);
      }, 750);
    } catch (err) {}

    // Clear the selection
    selection?.removeAllRanges();

    // Remove the dummy elements from the body
    document.body.removeChild(headingEle);
    if (category) {
      document.body.removeChild(subheadingEle);
    }
    if (subcategory) {
      document.body.removeChild(subsubheadingEle);
    }
    document.body.removeChild(lineEle);
  }

  function getLines(lines: []) {
    return lines.filter((line: string) => {
      return !search || line.toLowerCase().includes(search.toLowerCase());
    });
  }

  function isShowStep(title: string) {
    if (!steps) {
      return true;
    }
    const stepRegex = /^Step (\d+)$/;

    const match = title.match(stepRegex);

    if (match) {
      const stepNumber = parseInt(match[1], 10);
      if (stepNumber >= steps[0] && stepNumber <= steps[1]) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  function isShowSubject() {
    let show = false;
    if (!search && !steps) {
      show = true;
    } else {
      Object.keys(obj).forEach((category) => {
        if (isShowCategory(obj[category])) {
          show = true;
        }
      });
    }
    return show;
  }

  function isShowCategory(category) {
    let show = false;
    if (!search && !steps) {
      show = true;
    } else if (Array.isArray(category)) {
      category.forEach((line) => {
        if (line.toLowerCase().includes(search.toLowerCase())) {
          show = true;
        }
      });
    } else {
      Object.keys(category).forEach((subcategory) => {
        if (isShowSubCategory(category[subcategory], subcategory)) {
          show = true;
        }
      });
    }
    return show;
  }

  function isShowSubCategory(subcategory, name) {
    let show = false;
    if (!search && !steps) {
      show = true;
    }
    if (steps) {
      show = isShowStep(name);
    }
    if (search) {
      show = false;
      subcategory.forEach((line) => {
        if (line.toLowerCase().includes(search.toLowerCase())) {
          show = true;
        }
      });
    }
    return show;
  }

  return (
    <div
      className="group"
      style={{ display: isShowSubject() ? "flex" : "none" }}
    >
      <div id={title} className="heading">
        {title}
      </div>
      {Object.keys(obj).map((key) => {
        return (
          <div
            className="group"
            style={{ display: isShowCategory(obj[key]) ? "flex" : "none" }}
          >
            <div className="subheading">{key}</div>
            {Array.isArray(obj[key])
              ? showLines(obj[key], title, key)
              : Object.keys(obj[key]).map((subheading) => {
                  return (
                    <div
                      className="group"
                      style={{
                        display: isShowSubCategory(
                          obj[key][subheading],
                          subheading
                        )
                          ? "flex"
                          : "none",
                      }}
                    >
                      <div className="subsubheading">{subheading}</div>
                      {Array.isArray(obj[key][subheading])
                        ? showLines(
                            obj[key][subheading],
                            title,
                            key,
                            subheading
                          )
                        : Object.keys(obj[key][subheading]).map(
                            (subsubheading) => {
                              return showLines(
                                obj[key][subheading][subsubheading],
                                title,
                                key,
                                subheading
                              );
                            }
                          )}
                    </div>
                  );
                })}
          </div>
        );
      })}
    </div>
  );
}
