export default function Section({
  subject,
  categories,
  search,
  steps,
}: {
  subject: string;
  categories: any;
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
    return filteredLines.map((line: string, index: number) => {
      return (
        <div
          className="line"
          id={[subject, category, subcategory, index + 1]
            .filter(Boolean)
            .join("-")}
          onClick={(e) =>
            copyToClipboard({
              e,
              subject,
              category,
              subcategory,
              index: index + 1,
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
    index,
  }: {
    e: any;
    subject: string;
    category?: string;
    subcategory?: string;
    index: number;
  }) {
    let subjectid = subject;
    let categoryid = [subject, category].join("-");
    let subcategoryid = [subject, category, subcategory].join("-");
    let lineid = [subject, category, subcategory, index]
      .filter(Boolean)
      .join("-");

    var range = document.createRange();
    let subjectNode = document.getElementById(subjectid);
    let subjectNodeCopy = subjectNode?.cloneNode();
    if (!subjectNodeCopy) {
      console.log("NO SUBJECT NODE");
      return;
    }
    //@ts-ignore
    subjectNodeCopy.id = "tempSubject";
    subjectNodeCopy.appendChild(
      //@ts-ignore
      subjectNode?.getElementsByClassName("subject")[0].cloneNode(true)
    );

    let categoryNodeCopy: Node | undefined;
    if (category) {
      let categoryNode = document.getElementById(categoryid);
      categoryNodeCopy = categoryNode?.cloneNode();
      if (!categoryNodeCopy) {
        console.log("NO CATEGORY NODE");
        return;
      }
      //@ts-ignore
      categoryNodeCopy.id = "tempCategory";
      categoryNodeCopy.appendChild(
        //@ts-ignore
        categoryNode?.getElementsByClassName("category")[0].cloneNode(true)
      );
    }

    let subcategoryNodeCopy: Node | undefined;
    if (subcategory) {
      let subcategoryNode = document.getElementById(subcategoryid);
      subcategoryNodeCopy = subcategoryNode?.cloneNode();
      if (!subcategoryNodeCopy) {
        console.log("NO SUB CATEGORY NODE");
        return;
      }
      //@ts-ignore
      subcategoryNodeCopy.id = "tempSubCategory";
      subcategoryNodeCopy.appendChild(
        //@ts-ignore
        subcategoryNode
          ?.getElementsByClassName("subcategory")[0]
          .cloneNode(true)
      );
    }

    let lineNode = document.getElementById(lineid)?.cloneNode(true);
    if (!lineNode) {
      console.log("NO LINE NODE");
      return;
    }
    //@ts-ignore
    lineNode.id = "tempLine";

    if (subcategoryNodeCopy) {
      subcategoryNodeCopy.appendChild(lineNode);
      if (categoryNodeCopy) {
        categoryNodeCopy.appendChild(subcategoryNodeCopy);
        subjectNodeCopy.appendChild(categoryNodeCopy);
      }
    } else if (categoryNodeCopy) {
      categoryNodeCopy.appendChild(lineNode);
      subjectNodeCopy.appendChild(categoryNodeCopy);
    } else {
      subjectNodeCopy.appendChild(lineNode);
    }

    let subjectsNode = document.getElementById("subjects");
    if (!subjectsNode) {
      return;
    }
    subjectsNode.appendChild(subjectNodeCopy);

    range.selectNode(subjectNodeCopy);

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
    } catch (err) {
      console.log(err);
    }

    selection?.removeAllRanges();
    subjectsNode.removeChild(subjectNodeCopy);
  }

  function getLines(lines: []) {
    if (!Array.isArray(lines)) return [];
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
      Object.keys(categories).forEach((category) => {
        if (isShowCategory(categories[category])) {
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
    let show = true;

    if (steps && !isShowStep(name)) {
      show = false;
    }
    if (Array.isArray(subcategory)) {
      let foundLine = false;
      subcategory.forEach((line) => {
        if (line.toLowerCase().includes(search.toLowerCase())) {
          foundLine = true;
        }
      });
      if (!foundLine) {
        show = false;
      }
    } else {
      Object.keys(subcategory).forEach((subsubcategory) => {
        if (
          !isShowSubSubCategory(subcategory[subsubcategory], subsubcategory)
        ) {
          show = false;
        }
      });
    }
    return show;
  }

  function isShowSubSubCategory(subsubcategory, name) {
    let show = true;
    if (steps && !isShowStep(name)) {
      show = false;
    }
    if (search) {
      let foundLine = false;
      subsubcategory.forEach((line) => {
        if (line.toLowerCase().includes(search.toLowerCase())) {
          foundLine = true;
        }
      });
      if (!foundLine) {
        show = false;
      }
    }
    return show;
  }

  return (
    <div
      className="group"
      id={subject}
      style={{ display: isShowSubject() ? "flex" : "none" }}
    >
      <div id={subject} className="subject">
        {subject}
      </div>
      {Object.keys(categories).map((category) => {
        return (
          <div
            className="group"
            id={`${subject}-${category}`}
            style={{
              display: isShowCategory(categories[category]) ? "flex" : "none",
            }}
          >
            <div className="category">{category}</div>
            {Array.isArray(categories[category])
              ? showLines(categories[category], subject, category)
              : Object.keys(categories[category]).map((subcategory) => {
                  return (
                    <div
                      className="group"
                      id={`${subject}-${category}-${subcategory}`}
                      style={{
                        display: isShowSubCategory(
                          categories[category][subcategory],
                          subcategory
                        )
                          ? "flex"
                          : "none",
                      }}
                    >
                      <div className="subcategory">{subcategory}</div>
                      {Array.isArray(categories[category][subcategory])
                        ? showLines(
                            categories[category][subcategory],
                            subject,
                            category,
                            subcategory
                          )
                        : Object.keys(categories[category][subcategory]).map(
                            (subsubcategory) => {
                              return (
                                <div
                                  className="group"
                                  id={`${subject}-${category}-${subcategory}-${subsubcategory}`}
                                  style={{
                                    display: isShowSubSubCategory(
                                      categories[category][subcategory][
                                        subsubcategory
                                      ],
                                      subsubcategory
                                    )
                                      ? "flex"
                                      : "none",
                                  }}
                                >
                                  <div className="subsubcategory">
                                    {subsubcategory}
                                  </div>
                                  {showLines(
                                    categories[category][subcategory][
                                      subsubcategory
                                    ],
                                    subject,
                                    category,
                                    subcategory
                                  )}
                                </div>
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
