import { z } from "zod";

export const listMerchantMembersParameters = z.object({
  offset: z
    .number()
    .int()
    .describe(`Offset of the first member to return.`)
    .optional(),
  limit: z
    .number()
    .int()
    .describe(`Maximum number of members to return.`)
    .optional(),
  scroll: z.boolean().describe(`Indicates to skip count query.`).optional(),
  email: z
    .string()
    .describe(`Filter the returned members by email address prefix.`)
    .optional(),
  status: z
    .enum(["accepted", "pending", "expired", "disabled", "unknown"])
    .describe(`Filter the returned members by the membership status.`)
    .optional(),
  roles: z
    .array(z.string())
    .describe(`Filter the returned members by role.`)
    .optional(),
  merchantCode: z.string().describe(`Merchant code.`),
});

export const createMerchantMemberParameters = z.object({
  is_managed_user: z
    .boolean()
    .describe(
      `True if the user is managed by the merchant. In this case, we'll created a virtual user with the provided password and nickname.`,
    )
    .optional(),
  email: z.string().describe(`Email address of the member to add.`),
  password: z
    .string()
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
    .describe(
      `List of roles to assign to the new member. In the case of service accounts, the roles are predefined.`,
    ),
  metadata: z
    .object({})
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  attributes: z
    .object({})
    .describe(
      `Object attributes that are modifiable only by SumUp applications.`,
    )
    .optional(),
  merchantCode: z.string().describe(`Merchant code.`),
});

export const getMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
});

export const updateMerchantMemberParameters = z.object({
  roles: z.array(z.string()).optional(),
  metadata: z
    .object({})
    .describe(
      `Set of user-defined key-value pairs attached to the object. Partial updates are not supported. When updating, always submit whole metadata.`,
    )
    .optional(),
  attributes: z
    .object({})
    .describe(
      `Object attributes that are modifiable only by SumUp applications.`,
    )
    .optional(),
  user: z
    .object({
      nickname: z
        .string()
        .describe(`User's preferred name. Used for display purposes only.`),
      password: z
        .string()
        .describe(
          `Password of the member to add. Only used if \`is_managed_user\` is true.`,
        ),
    })
    .describe(`Allows you to update user data of managed users.`)
    .optional(),
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
});

export const deleteMerchantMemberParameters = z.object({
  merchantCode: z.string().describe(`Merchant code.`),
  memberId: z.string().describe(`The ID of the member to retrieve.`),
});
