## AWS Setup

Lets setup an AWS account with an IAM account. IAM best practices stipulates that you not use the `root` user for everyday tasks, rather you use IAM accounts with limited access.

Follow the steps to `Sign up for an AWS account` and `Create a user with administrative access here`

https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-set-up.html#create-an-admin

In particular, _after_ creating an AWS account, you need to enable the `AWS IAM Identity Center`. This setups the platform where you register Users with their Emails, and grant them permissions.

![alt text](image-5.png)

After you've enabled `IAM Identity Center`, `https://us-east-1.console.aws.amazon.com/singlesignon/home` (or wherever your region is) should take to to a screen like this

![alt text](image-6.png)

Bookmark the AWS Access Portal URL (underlined in red), this is the link our IAM users will be logging in with

Now follow the steps here to create an actual User that we'll be logging in with
https://docs.aws.amazon.com/singlesignon/latest/userguide/quick-start-default-idc.html

Make sure that you've

- created the User `X`
- put `X` in `Admin Team` group
- created a Permission Set for `AdministratorAccess`
- Assigned the `Admin Team` the `AdministratorAccess` Permission set

Here's some screenshots after I finished things

Users page with one user `tiensIamAccount`

![alt text](image-7.png)

Groups page with `Admin Team` group

![alt text](image-8.png)

Assigning the `Admin Team` group the `AdministratorAccess` permission set

![alt text](image-9.png)

Now using the signon link earlier, logon to AWS using this test user

![alt text](image-10.png)

Click on `AdministratorAccess`

![alt text](image-11.png)

You're in! Verify that the logged in user shows AdministratorAccess/{your_account_name}
