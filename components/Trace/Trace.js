import React, { useRef } from "react";
import Link from "next/link";
// import styles from 'tracmodule.css'
import styles from "./trace.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import getData from "../../api/getData";

import { book } from "../../utils/processIndex.js";

export default function Trace(data) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [treeData, setTreeData] = useState(null);
  const containerRef = useRef(null);
  const highlightRef = useRef(null);

  const scrollToHighlight = () => {
    if (containerRef.current && highlightRef.current) {
      const position =
        highlightRef.current.offsetTop - containerRef.current.offsetTop;

      containerRef.current.scrollTop = position - 1;
      console.log("highlightRef is", highlightRef.current);
    }
  };

  const showPath = (target) => {
    let path = [];
    let currentChapter = book.findChapterByFileName(target)[0];
    // console.log("currentchapter is", currentChapter);
    currentChapter.parentChapters.forEach((chapter) => {
      // console.log("chapter is", chapter.fileName);
      path.push(chapter);
    });
    return path;
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('hellooo') 
      let res
      if(localStorage.getItem("indexData")){
        console.log('data exists')
        res = JSON.parse(localStorage.getItem("indexData"))
      } else {
        console.log('none exists')

        res = await getData('index');
        console.log(res)
        localStorage.setItem("indexData", JSON.stringify(res));
      }
      setTreeData(res);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Accordion onClick={scrollToHighlight} square className={styles.toggle}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h3 id="accordsum">
              <h3 className={styles.chapterlink}>Uncertain Universe</h3>
            {showPath(data.data.file_name).map((item) => {
              return(
                <>
                  <span> {'>'} </span>
                  <Link href={`/chapters/${item.fileName}`}>
                    <h3 className={styles.chapterlink}>{item.title}</h3>
                  </Link>
                  
                </>
              )})
            }  
          </h3>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          <main ref={containerRef} className={styles.traces}>
            {/* match current data title and highlight in trace */}
            <Box sx={{ width: "100%", paddingLeft: "0.1em" }}>
              <Grid
                container
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
                justifyContent={{ xs: "center", sm: "left" }}
                rowSpacing={2}
                columnSpacing={{ xs: 4, sm: 10, md: 15 }}
              >
                {!isLoading &&
                  treeData.map(
                    (collection, id) =>
                      collection.index && (
                        <TableOfContentsChapter
                          collection={collection}
                          key={id}
                          findmatch={data.data.file_name}
                          highlightRef={highlightRef}
                        />
                      )
                  )}
              </Grid>
            </Box>
          </main>
        </AccordionDetails>
      </Accordion>

      <style jsx local>
        {`

          h3 {
            color: #3176c7;
            text-transform: capitalize;
            font-size: 1.2rem;
            font-family: var(--modern-font);
          }

          ul li {
            list-style-type: none;
            text-decoration: none;
            display: block;
            margin-right: 1rem;
            font-size: 1rem;
          }

          a {
            text-decoration: none;
            color: grey;
          }

          ul {
            padding: 0;
            margin: 0;
          }
        `}
      </style>
    </>
  );
}

function TableOfContentsItem(node) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={styles.individuallink} onClick={() => setIsOpen(!isOpen)}>
        {Array.isArray(node.node) ? (
          node.node[0].file_name == node.findmatch ? (
            <Link href={`/chapters/${node.node[0].file_name}`}>
              <div ref={node.highlightRef} className={`${styles.chapterlink} ${styles.highlighted}`}>
                {node.node[0].title}
              </div>
            </Link>
          ) : (
            <Link href={`/chapters/${node.node[0].file_name}`}>
              <div className={styles.chapterlink}>{node.node[0].title}</div>
            </Link>
          )
        ) : node.node.file_name == node.findmatch ? (
          <Link href={`/chapters/${node.node.file_name}`}>
            <div ref={node.highlightRef} className={`${styles.chapterlink} ${styles.highlighted}`}>
              {node.node.title}
            </div>
          </Link>
        ) : (
          <Link href={`/chapters/${node.node.file_name}`}>
            <div className={styles.chapterlink}>{node.node.title}</div>
          </Link>
        )}

        {Array.isArray(node.node) && (
          <span className="icons">
            {" "}
            {isOpen ? (
              <ExpandLessIcon sx={{ fontSize: "1rem", marginTop: "0" }} />
            ) : (
              <ExpandMoreIcon sx={{ fontSize: "1rem", marginTop: "0" }} />
            )}{" "}
          </span>
        )}
      </div>

      {isOpen && Array.isArray(node.node) && (
        <div className={styles.individuallink} style={{ marginLeft: "20px" }}>
          {node.node[1].map((child, index) => (
            <TableOfContentsItem
              key={index}
              node={child}
              findmatch={node.findmatch}
              highlightRef={node.highlightRef}
            />
          ))}
        </div>
      )}

    </div>
  );
}

function TableOfContentsChapter(data) {
  return (
    <>
      <Grid item sm={6} xs={10}>
        <div className={styles.card} >
          {data.collection.index[0][0].file_name == data.findmatch ? (
            <Link href={`/chapters/${data.collection.index[0][0].file_name}`}>
              <h3 ref={data.highlightRef} className={`${styles.chapterlink} ${styles.highlighted}`}>
                {data.collection.index[0][0].title}
              </h3>
            </Link>
          ) : (
            data.collection.index && (
              <Link href={`/chapters/${data.collection.index[0][0].file_name}`}>
                <h3 className={styles.chapterlink}>{data.collection.index[0][0].title}</h3>
              </Link>
            )
          )}
        </div>
        {data.collection.index &&
          data.collection.index[0][1].map((node, i) => {
            return (
              <TableOfContentsItem
                key={i}
                node={node}
                findmatch={data.findmatch}
                highlightRef={data.highlightRef}
              />
            );
          })}
      </Grid>
    </>
  );
}
