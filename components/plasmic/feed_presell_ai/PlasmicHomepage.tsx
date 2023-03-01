// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 9u4jBEkqWUKrrXSfUUFFfk
// Component: JO_Hju0Bhq
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { DataFetcher } from "@plasmicpkgs/plasmic-query"; // plasmic-import: ae7V86eNoXA/codeComponent
import Button from "../../Button"; // plasmic-import: tGhiKRCWdC1/component

import { useScreenVariants as useScreenVariantsgpwde9M3Mng } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: GPWDE9_m3Mng/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_feed_presell_ai.module.css"; // plasmic-import: 9u4jBEkqWUKrrXSfUUFFfk/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: JO_Hju0Bhq/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: LM5WZ4deOJj/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: OQdAlXTxFB/icon

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  httpApiFetcher?: p.Flex<typeof DataFetcher>;
  h4?: p.Flex<"h4">;
  text?: p.Flex<"div">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsgpwde9M3Mng()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__yLw1)}>
            <div className={classNames(projectcss.all, sty.freeBox__am6C9)}>
              <div className={classNames(projectcss.all, sty.freeBox__pk2Lx)}>
                <DataFetcher
                  data-plasmic-name={"httpApiFetcher"}
                  data-plasmic-override={overrides.httpApiFetcher}
                  className={classNames("__wab_instance", sty.httpApiFetcher)}
                  dataName={"fetchedData" as const}
                  errorDisplay={
                    <ph.DataCtxReader>
                      {$ctx => "Error fetching data"}
                    </ph.DataCtxReader>
                  }
                  headers={{
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer keyVDvhyVSx5Ntbl3"
                  }}
                  loadingDisplay={
                    <ph.DataCtxReader>{$ctx => "Loading..."}</ph.DataCtxReader>
                  }
                  method={"GET" as const}
                  noLayout={false}
                  url={
                    "https://api.airtable.com/v0/appmM1mMqcDvugXhY/PlasmicCMS " as const
                  }
                >
                  <ph.DataCtxReader>
                    {$ctx => (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.columns___228In
                        )}
                      >
                        {(
                          (() => {
                            try {
                              return $ctx.fetchedData.records;
                            } catch (e) {
                              if (e instanceof TypeError) {
                                return [];
                              }
                              throw e;
                            }
                          })() ?? []
                        ).map((currentItem, currentIndex) => (
                         <div
                            className={classNames(
                              projectcss.all,
                              sty.column___5ZJgT
                            )}
                            key={currentIndex}
                          >
                            <div
                              className={classNames(
                                projectcss.all,
                                sty.columns__vqwBq
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__xXcZs
                                )}
                              >
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img__dQcxx)}
                                  displayHeight={"100%" as const}
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"100%" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={"100%" as const}
                                  loading={"lazy" as const}
                                  src={(() => {
                                    try {
                                      return currentItem.fields.heroImage[0]
                                        .url;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return "https://site-assets.plasmic.app/c66d37fd7c3b428bab7c10b83a77c7c8.jpg";
                                      }
                                      throw e;
                                    }
                                  })()}
                                />
                              </div>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.column__o1Aag
                                )}
                              >
                                <p.PlasmicImg
                                  alt={""}
                                  className={classNames(sty.img__ddY58)}
                                  displayHeight={"auto" as const}
                                  displayMaxHeight={"none" as const}
                                  displayMaxWidth={"100%" as const}
                                  displayMinHeight={"0" as const}
                                  displayMinWidth={"0" as const}
                                  displayWidth={"auto" as const}
                                  loading={"lazy" as const}
                                  src={(() => {
                                    try {
                                      return currentItem.fields.logo[0].url;
                                    } catch (e) {
                                      if (e instanceof TypeError) {
                                        return undefined;
                                      }
                                      throw e;
                                    }
                                  })()}
                                />

                                <div
                                  className={classNames(
                                    projectcss.all,
                                    sty.freeBox__gecIi
                                  )}
                                >
                                  <h4
                                    data-plasmic-name={"h4"}
                                    data-plasmic-override={overrides.h4}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.h4,
                                      projectcss.__wab_text,
                                      sty.h4
                                    )}
                                  >
                                    {hasVariant(
                                      globalVariants,
                                      "screen",
                                      "mobileOnly"
                                    )
                                      ? "Customer Loyalty Programs That Stick"
                                      : (() => {
                                          try {
                                            return currentItem.fields
                                              .heroHeadline;
                                          } catch (e) {
                                            if (e instanceof TypeError) {
                                              return "Blog heading dummy";
                                            }
                                            throw e;
                                          }
                                        })()}
                                  </h4>

                                  <div
                                    data-plasmic-name={"text"}
                                    data-plasmic-override={overrides.text}
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text
                                    )}
                                  >
                                    {(() => {
                                      try {
                                        return currentItem.fields
                                          .heroSubHeadline;
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...";
                                        }
                                        throw e;
                                      }
                                    })()}
                                  </div>

                                  {true ? (
                                    <div
                                      className={classNames(
                                        projectcss.all,
                                        sty.freeBox__kc5Br
                                      )}
                                    >
                                      <Button
                                        data-plasmic-name={"button"}
                                        data-plasmic-override={overrides.button}
                                        className={classNames(
                                          "__wab_instance",
                                          sty.button
                                        )}
                                        color={"blue" as const}
                                        endIcon={
                                          <ArrowRightsvgIcon
                                            className={classNames(
                                              projectcss.all,
                                              sty.svg__r2Rbh
                                            )}
                                            role={"img"}
                                          />
                                        }
                                        link={`/article/${(() => {
                                          try {
                                            return currentItem.fields.slug;
                                          } catch (e) {
                                            if (e instanceof TypeError) {
                                              return "rec2g2aZndnbC3igs";
                                            }
                                            throw e;
                                          }
                                        })()}`}
                                        shape={"rounded" as const}
                                        showEndIcon={true}
                                        startIcon={
                                          <ChecksvgIcon
                                            className={classNames(
                                              projectcss.all,
                                              sty.svg__ng243
                                            )}
                                            role={"img"}
                                          />
                                        }
                                      >
                                        <p.PlasmicLink
                                          className={classNames(
                                            projectcss.all,
                                            projectcss.a,
                                            projectcss.__wab_text,
                                            sty.link___9AMbf
                                          )}
                                          component={Link}
                                          href={`/article/${(() => {
                                            try {
                                              return currentItem.fields.slug;
                                            } catch (e) {
                                              if (e instanceof TypeError) {
                                                return "rec2g2aZndnbC3igs";
                                              }
                                              throw e;
                                            }
                                          })()}`}
                                          platform={"nextjs"}
                                        >
                                          {"Read post"}
                                        </p.PlasmicLink>
                                      </Button>
                                    </div>
                                  ) : null}

                                  <p.PlasmicLink
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.a,
                                      projectcss.__wab_text,
                                      sty.link___3ESKz
                                    )}
                                    component={Link}
                                    href={`/squeeze/${(() => {
                                      try {
                                        return currentItem.id;
                                      } catch (e) {
                                        if (e instanceof TypeError) {
                                          return "recv3gYlFYc1L0KHG";
                                        }
                                        throw e;
                                      }
                                    })()}`}
                                    platform={"nextjs"}
                                  >
                                    {"Squeez"}
                                  </p.PlasmicLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__vjJyd
                          )}
                        />
                      </p.Stack>
                    )}
                  </ph.DataCtxReader>
                </DataFetcher>
              </div>
            </div>
          </div>
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "httpApiFetcher", "h4", "text", "button"],
  httpApiFetcher: ["httpApiFetcher", "h4", "text", "button"],
  h4: ["h4"],
  text: ["text"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  httpApiFetcher: typeof DataFetcher;
  h4: "h4";
  text: "div";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    httpApiFetcher: makeNodeComponent("httpApiFetcher"),
    h4: makeNodeComponent("h4"),
    text: makeNodeComponent("text"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
