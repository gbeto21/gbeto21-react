import React from "react";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="container">
      <div className="container-personal-info">
        <div className="row row-cols-1 row-lg-cols-2">
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">
              👔 I've professional experience with: C#, WPF, Java,
              React, Node, Fastify, Cucumber, SQLServer, MySQL,
              PostgreSQL and AWS: Lambdas, Cognito, API Gateway and Step
              functions.
            </p>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">
              💼 I've developed personal projects with: Angular, GraphQL,
              Bootstrap, ReactNative, TypeScript, Mongo DB and Serverless
              framework.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-lg-cols-2">
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">
              📚 I've knowledge in: Docker, Travis, Git, GitHub, ASP.Net, AWS
              EC2, VPN, S3, DynamoDB, CloudFormation.
            </p>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">
              ☁️ AWS Certified Developer Associate and AWS Certified Solutions Architect.
            </p>
          </div>
        </div>
        <div className="row row-cols-1 row-lg-cols-2">
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">
              📖 I'm interested in Docker and AWS.
            </p>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="lh-1">⌨️ I'm a lover of keyboard shortcuts too.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
