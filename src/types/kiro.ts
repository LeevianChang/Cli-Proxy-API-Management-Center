/**
 * Kiro 用量相关类型定义
 */

// Kiro 用量配额信息
export interface KiroUsageInfo {
  current_usage: number;
  usage_limit: number;
  next_reset?: number;
  subscription_type?: string;
}

// Kiro 用量配额响应
export interface KiroUsageQuotaResponse {
  usageBreakdownList: KiroUsageBreakdownExtended[];
  nextDateReset?: number;
}

// Kiro 详细用量信息
export interface KiroUsageBreakdownExtended {
  currentUsageWithPrecision: number;
  usageLimitWithPrecision: number;
  subscriptionType?: string;
  freeTrialInfo?: KiroFreeTrialInfo;
}

// Kiro 免费试用信息
export interface KiroFreeTrialInfo {
  currentUsageWithPrecision: number;
  usageLimitWithPrecision: number;
}

// Kiro 配额状态
export interface KiroQuotaStatus {
  isExhausted: boolean;
  remainingQuota: number;
  usageLimit: number;
  currentUsage: number;
  nextReset?: Date;
  subscriptionType?: string;
}

// Kiro 认证文件扩展信息
export interface KiroAuthFileExtension {
  kiroUsage?: KiroUsageInfo;
  kiroQuotaStatus?: KiroQuotaStatus;
}
