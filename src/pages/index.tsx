import {
  AcademicCapIcon,
  ChartBarIcon,
  ChatAlt2Icon,
  ClipboardListIcon,
  CogIcon,
  DatabaseIcon,
  LightningBoltIcon,
  TerminalIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import { GlowingRing } from '../components/elements/landing/GlowingRing';
import { GlowingText } from '../components/elements/landing/GlowingText';
import { GradientText } from '../components/elements/landing/GradientText';
import { HighlightedText } from '../components/elements/landing/HighlightedText';
import ContributorsSection from '../components/Index/ContributorsSection';
import { CPIProjectCard } from '../components/Index/CPIProjectCard';
import { Feature } from '../components/Index/Feature';
import { ProblemsetsFeature } from '../components/Index/features/ProblemsetsFeature';
import { ProgressTrackingFeature } from '../components/Index/features/ProgressTrackingFeature';
import { ResourcesFeature } from '../components/Index/features/ResourcesFeature';
import { EasyFunCoding, Vercel } from '../components/Index/sponsor-logos';
import TrustedBy from '../components/Index/TrustedBy';
import Layout from '../components/layout';
import SEO from '../components/seo';
import TopNavigationBar from '../components/TopNavigationBar/TopNavigationBar';

const containerClasses = 'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8';
const headerClasses =
  'text-4xl md:text-5xl 2xl:text-6xl font-black text-black dark:text-white';
const headerClassesNoText = 'text-4xl md:text-5xl 2xl:text-6xl font-black';
const subtextClasses =
  'text-lg md:text-xl 2xl:text-2xl font-medium max-w-4xl leading-relaxed text-gray-700 dark:text-gray-400';
const headerSubtextSpacerClasses = 'h-6 2xl:h-12';
const whiteButtonClassesBig =
  'text-xl bg-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium text-gray-900 relative';
const whiteButtonClasses =
  'text-lg md:text-xl bg-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-medium text-gray-900 relative';
const usacoTitleClasses =
  'md:text-center font-black tracking-tight text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl';
const linkTextStyles =
  'text-blue-600 dark:text-blue-300 transition hover:text-purple-600 dark:hover:text-purple-300';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <SEO title={null} />

      {/*<a*/}
      {/*  href="http://usaco.org/"*/}
      {/*  className="block text-base font-medium text-center text-white bg-blue-600 py-2"*/}
      {/*>*/}
      {/*  &larr; Back to usaco.org*/}
      {/*</a>*/}
      <div className="bg-black">
        <TopNavigationBar />
      </div>

      {/* Begin Hero */}
      <div className="-mt-16 bg-gray-100 dark:bg-black">
        <div className="md:min-h-screen flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="h-6 sm:h-12"></div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="h-24"></div>

            <div className="flex md:justify-center dark:hidden">
              <div className={classNames(usacoTitleClasses, 'text-black mt-4')}>
               OI Guide
              </div>
            </div>
            <div className="flex md:justify-center invisible h-0 dark:visible dark:h-auto">
              <GlowingText
                className={classNames(usacoTitleClasses, 'text-white mt-4')}
              >
                OI Guide
              </GlowingText>
            </div>

            <div className="h-6 sm:h-8"></div>

            <p
              className="
                md:text-center
                text-xl
                sm:text-2xl
                2xl:text-3xl
                font-medium
                leading-snug
                md:!leading-normal
                text-gray-800
                dark:text-gray-300
              "
            >
              免费且实用的{' '}
              <GradientText>精选优质竞赛资源</GradientText>{' '}
              <br className="hidden md:block" />
            </p>
            <p
              className="
                md:text-center
                text-xl
                sm:text-2xl
                2xl:text-2xl
                font-medium
                leading-snug
                md:!leading-normal
                text-gray-800
                dark:text-gray-300
              "
            >
              好风凭借力，送我上青云
              <br className="hidden md:block" />
            </p>

            <div className="h-8 sm:h-12"></div>

            <div className="flex md:justify-center">
              <GlowingRing>
                <Link
                  to="/dashboard"
                  className={classNames(whiteButtonClassesBig, 'inline-block')}
                >
                  开始
                </Link>
              </GlowingRing>
            </div>
          </div>

          <div className="h-16 sm:h-24"></div>

          <div className="flex md:justify-center md:text-xl text-gray-600 dark:text-gray-400">
            <a
              href="https://joincpi.org/"
              className="inline-flex items-center space-x-3 md:space-x-4"
            >
              <div className="h-9 w-9">
                <svg
                  className="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                >
                  <g>
                    <path
                      className="fill-current text-[#6600af]"
                      d="M50,5A45,45,0,1,1,5,50,45.05,45.05,0,0,1,50,5m0-5a50,50,0,1,0,50,50A50,50,0,0,0,50,0Z"
                    ></path>
                  </g>
                  <line
                    className="stroke-current stroke-[7px] text-[#be5eff]"
                    style={{ strokeMiterlimit: 10 }}
                    x1="50"
                    y1="27"
                    x2="73.29"
                    y2="65.64"
                  ></line>
                  <line
                    className="stroke-current stroke-[7px] text-[#be5eff]"
                    style={{ strokeMiterlimit: 10 }}
                    x1="50"
                    y1="27"
                    x2="26.71"
                    y2="67"
                  ></line>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="50"
                    cy="27"
                    r="10"
                  ></circle>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="26.71"
                    cy="67"
                    r="10"
                  ></circle>
                  <circle
                    className="fill-current text-[#961be8]"
                    cx="73.29"
                    cy="67"
                    r="10"
                  ></circle>
                </svg>
              </div>

              <span>Created by the CP Initiative</span>
            </a>
          </div>
          <div className="h-4 sm:h-6 md:h-16"></div>
        </div>
      </div>
      {/* End Hero */}

      {/* Learn USACO. Efficiently. */}
      <div className="bg-white dark:bg-gray-900">
        <div className="h-10 sm:h-20 md:h-36 2xl:h-48"></div>

        <div className={containerClasses}>
          <h2
            className={classNames(
              headerClassesNoText,
              'text-black dark:text-gray-100'
            )}
          >
            <div className="dark:hidden">
            <HighlightedText>高效地</HighlightedText>学习有关算法竞赛的一切. 
            </div>
            <div className="invisible h-0 dark:visible dark:h-auto">
            <HighlightedText>高效地</HighlightedText>学习有关算法竞赛的一切. 
            </div>
          </h2>
          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            停止漫无目的地刷题和学习繁琐无用的知识点，OI Guide为OI选手和大学生提供!
          </p>
          <p className={subtextClasses}>
            <b className="text-black dark:text-white">
              科学，实用的学习路线。
            </b>
          </p>
          <p className={subtextClasses}>
            由多年参赛经验的OI巨佬们倾力贡献，免费开放给所有选手!
          </p>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={DatabaseIcon}
            iconClasses="from-cyan-400 to-sky-500"
            title="精选学习资源"
            blobClasses="bg-sky-200 dark:bg-sky-800 hidden xl:block"
            feature={<ResourcesFeature />}
            featurePosition="left"
          >
            来源于知名平台的参考资料与题解教程，助你深入算法学习
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={ClipboardListIcon}
            iconClasses="from-purple-400 to-indigo-500"
            title="严选好题"
            blobClasses="bg-purple-300 dark:bg-purple-800"
            feature={<ProblemsetsFeature />}
            featurePosition="right"
          >
            多维度，多难度的严选好题
            助你训练各个知识点，加强记忆与理解
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          <Feature
            icon={LightningBoltIcon}
            iconClasses="from-yellow-400 to-orange-500"
            title="进度追踪"
            blobClasses="bg-orange-200 dark:bg-orange-800"
            feature={<ProgressTrackingFeature />}
            featurePosition="left"
            fade="none"
          >
            通过进度追踪，记录算法学习过程中的一点一滴
          </Feature>

          <div className="h-12 md:h-20 2xl:h-36"></div>

          
        </div>
      </div>
      {/* End Learn USACO. Efficiently. */}

      <div className="bg-gray-100 dark:bg-black">
        <div className="h-16 md:h-20 2xl:h-36"></div>
        <div className={containerClasses}>
          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>正在筹备资深课程团队</h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              正在筹备资深课程团队
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>

          <p className={subtextClasses}>
            我们正在招募资深选手参与到课程的编辑中
          </p>


          <div className="h-8 md:h-12 2xl:h-16"></div>

          <div className="relative group inline-block">
            <GlowingRing>
              <Link
                to="/dashboard"
                className={classNames(whiteButtonClasses, 'inline-block')}
              >
                开始课程
              </Link>
            </GlowingRing>
          </div>
        </div>
      </div>

      

      <div className="bg-gray-100 dark:bg-black">
        <div className="h-16 md:h-20 xl:h-36 2xl:h-10"></div>

        <div className={containerClasses}>
          

          <hr className="my-16 md:my-20 2xl:my-24 border-gray-300 dark:border-gray-800" />

          <div className="dark:hidden">
            <h1 className={classNames(headerClasses)}>
              在经济上帮助我们
            </h1>
          </div>
          <div className="invisible h-0 dark:visible dark:h-auto">
            <GlowingText
              className={classNames(headerClassesNoText, 'text-white')}
              extraGlow
            >
              在经济上帮助我们
            </GlowingText>
          </div>

          <div className={headerSubtextSpacerClasses}></div>
          <p className={subtextClasses}>
            我们是一个由大学生组成的公益组织，具体捐款细则正在商定
          </p>
        </div>

        <div className="h-16 md:h-20 xl:h-36 2xl:h-48"></div>
      </div>

      {/* Begin FAQ */}
      <div className="bg-white dark:bg-dark-surface">
        <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
          <h2 className={classNames(headerClasses, 'dark:text-gray-100')}>
            一些问题
          </h2>
          <div className="pt-10 md:pt-16">
            <dl className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    什么是算法竞赛？
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      对于小学，初中及高中生，主流的算法赛事是由中国计算机学会举办的{' '}
                      <a
                        href="https://www.noi.cn/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        NOI
                      </a>{' '}
                      与{' '}
                      <a
                        href="https://www.noi.cn/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        NOIP
                      </a>{' '}
                      等赛事。对于大学生，参加的往往是{' '}
                      <a
                        href="https://icpc.global/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >{' '}
                        ACM
                      </a>
                      ，
                      {' '}
                      <a
                        href="https://dasai.lanqiao.cn/"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >{' '}
                        蓝桥杯
                      </a>
                      等赛事。
                      你可以在{' '}
                      <Link
                        to="/general/usaco-faq"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        关于赛事的更多问题
                      </Link>{' '}
                        找到更多信息
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    这是官方的教学大纲吗
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      不，OI Guide只是一个参考比赛要求的在线教学文档，与任何比赛官方无关
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                  我如何反馈bug或提出问题？
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                    如果您在使用指南时遇到问题（网站错误、拼写错误、链接损坏、解释不清楚等），请使用“联系我们”按钮按钮。
                    </p>
                  </dd>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    本指南适用于ACM和蓝桥杯等非OI赛事吗？
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      当然！大部分赛事考察的知识点都是重合的，完全可以跟随教学进度进行学习。
                    </p>
                  </dd>
                </div>
                
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    我如何为该网站贡献资源？
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      学习如何为网站贡献资源，请参考{' '}
                      <Link
                        to="/general/contributing"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        此页面
                      </Link>
                      。 感谢所有帮助建设本网站的朋友！
                    </p>
                  </dd>
                </div>
                <div className="mt-12">
                  <dt className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    该项目是开源的吗
                  </dt>
                  <dd className="mt-2">
                    <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
                      是的！欢迎为{' '}
                      <a
                        href="https://github.com/codycodyco/oi-guide"
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        我们的项目
                      </a>点个小⭐⭐
                      。
                    </p>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      {/*End FAQ*/}


      <div className="bg-gray-100 dark:bg-gray-900">
        <div className="max-w-screen-xl mx-auto py-12 px-4">
          <p className="text-center text-base leading-6 text-gray-400 dark:text-dark-med-emphasis">
            &copy; {new Date().getFullYear()} Competitive Programming
            Initiative. Powered by{' '}
            <a
              href="https://vercel.com/?utm_source=cp-initiative&utm_campaign=oss"
              target="_blank"
              className="underline"
              rel="noreferrer"
            >
              Vercel
            </a>
            .
            <br />
            No part of this website may be reproduced or commercialized in any
            manner without prior written permission.{' '}
            <Link to="/license" className="underline">
              Learn More.
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
