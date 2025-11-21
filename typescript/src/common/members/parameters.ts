import { z } from "zod";

export const createMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  is_managed_user: z
    .boolean()
    .describe(
      `True if the user is managed by the merchant. In this case, we'll created a virtual user with the provided password and nickname.`,
    )
    .optional(),
  email: z.string().describe(`Email address of the member to add.`),
  password: z
    .string()
    .min(8)
    .describe(
      `Password of the member to add. Only used if \`is_managed_user\` is true. In the case of service accounts, the password is not used and can not be defined by the caller.`,
    )
    .optional(),
  nickname: z
    .string()
    .describe(
      `Nickname of the member to add. Only used if \`is_managed_user\` is true. Used for display purposes only.`,
    )
    .optional(),
  roles: z
    .array(z.string())
    .describe(`List of roles to assign to the new member.`),
  metadata: z
    .object({})
    .catchall(z.any())
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  attributes: z
    .object({})
    .catchall(z.any())
    .describe(
      `Object attributes that are modifiable only by SumUp applications.`,
    )
    .optional(),
});

export const deleteMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
});

export const getMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
});

export const listMerchantMembersParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  offset: z
    .number()
    .int()
    .optional()
    .describe(`Offset of the first member to return.`),
  limit: z
    .number()
    .int()
    .optional()
    .describe(`Maximum number of members to return.`),
  scroll: z.boolean().optional().describe(`Indicates to skip count query.`),
  email: z
    .string()
    .optional()
    .describe(`Filter the returned members by email address prefix.`),
  "user.id": z.string().optional().describe(`Search for a member by user id.`),
  status: z
    .enum(["accepted", "pending", "expired", "disabled", "unknown"])
    .describe(`The status of the membership.`)
    .optional(),
  roles: z
    .array(z.string())
    .optional()
    .describe(`Filter the returned members by role.`),
});

export const updateMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
  roles: z.array(z.string()).optional(),
  metadata: z
    .object({})
    .catchall(z.any())
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  attributes: z
    .object({})
    .catchall(z.any())
    .describe(
      `Object attributes that are modifiable only by SumUp applications.`,
    )
    .optional(),
  user: z
    .object({
      nickname: z
        .string()
        .describe(`User's preferred name. Used for display purposes only.`)
        .optional(),
      password: z
        .string()
        .min(8)
        .describe(
          `Password of the member to add. Only used if \`is_managed_user\` is true.`,
        )
        .optional(),
    })
    .describe(`Allows you to update user data of managed users.`)
    .optional(),
});
