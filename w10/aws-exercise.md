## AWS

### Financial disclaimer

Please be advised that students are solely responsible for managing and monitoring their AWS (Amazon Web Services) billing and usage. This includes setting up appropriate alerts and notifications to track service usage and associated costs.

The instructor will not be held liable for any charges incurred by students for their use of AWS services. It is the responsibility of each student to ensure that they understand the billing practices of AWS and to manage their account settings accordingly to prevent unexpected charges.

For guidance on setting up billing alerts and monitoring usage, students can refer to the following AWS resources:

https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-what-is.html
https://aws.amazon.com/free/

> [!NOTE]
> I will guide you through how to setup Billing alerts. As long as you've setup some form of alerting, use only "Free tier" stuff, and **delete all AWS resources when we're done grading them**, you should be totally fine.

### The actual exercise

Here's the three pieces that we'll put together in this week's exercise

- [Setup an AWS Account with IAM Identity Center](aws-setup.md)
- [Setup Billing alerts](aws-billing-alerts.md)
- ["Deploying" a Docker app to EC2](./aws-ec2-docker/README.md)

### Submission

1. Screenshot of your IAM Identity Users page, showing that you've setup an IAM Account with the appropriate Permissions

2. Link to your EC2 instance's public IPv4 address. Going to `your_ipv4_address:3000` should show us your "website" running on EC2

3. Git repo of how you've Dockerized the `2650-docker-ec2` app (I imagine the Docker commits on top of the existing commits)

Jamie will grade this within the week, then be sure to turn off your EC2 instances (and whatever else you have on AWS) so you don't get billed.
