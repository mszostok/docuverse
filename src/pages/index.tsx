import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import {Hero} from "@site/src/components/homepage/Hero";
import {Card, Col, Row} from "antd";

const {Meta} = Card;

function CardContainer({href, children}) {
    return (
        <Link
            href={href}
        >
            {children}
        </Link>
    );
}

type ProjectCardProps = {
    title: String;
    link: String;
    img: string;
    style?: React.CSSProperties;
    meta: {
        title: String;
        style?: React.CSSProperties;
        description: String | React.ReactNode;
    }
}

const projects: ProjectCardProps[] = [
    {
        img: "https://szostok.io/projects/version/assets/examples/screen-cobra-version.png/",
        title: "go.szostok.io/version",
        link: "https://szostok.io/projects/version/quick-start/",
        meta: {
            title: "Pure DNA of your CLI",
            description: (
                <>
                    Go package to present your CLI version in <b>a classy way</b>. Born
                    to <b>remove the repetitiveness</b> in implementing the version
                    command.
                </>
            )
        }
    },
    {
        img: "https://raw.githubusercontent.com/mszostok/codeowners-validator/main/docs/assets/logo.png",
        title: "github.com/mszostok/codeowners",
        link: "https://github.com/mszostok/codeowners-validator",
        meta: {
            title: "GitHub CODEOWNERS validator",
            style: {margin: "55px 0 45px 0"},
            description: (
                <>
                    Ensures the correctness of your <b>CODEOWNERS</b> file.
                </>
            )
        }
    },
    {
        img: "https://raw.githubusercontent.com/kubeshop/botkube/main/branding/logos/botkube-black-192x192.png",
        title: "github.com/mszostok/botkube-plugins",
        link: "/botkube-plugins",
        style: {margin: "40px 0 0 125px", maxWidth: "150px"},
        meta: {
            title: "Botkube executors and sources extensions",
            style: {margin: "15px 0 45px 0"},
            description: (
                <>
                    Powerful extensions for Botkube platform.
                </>
            )
        }
    }
]

function ProjectCards() {
    return <Row style={{width: "100%"}}>
        {projects.map((item, i) => (
            <Col  xs={24} xl={8} key={i} style={{padding: "10px"}}>
                <CardContainer  href={item.link}>
                    <Card
                        type="inner"
                        title={item.title}
                        bordered
                        hoverable
                        cover={
                            <img
                                style={item.style}
                                alt="example"
                                src={item.img}
                            />
                        }
                    >
                        <Meta
                            {...item.meta}
                        />
                    </Card>
                </CardContainer>
            </Col>
        ))}
    </Row>
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();


    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <Hero/>
            <main>

                <div className="container">
                    <div className="row">
                        <ProjectCards/>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
