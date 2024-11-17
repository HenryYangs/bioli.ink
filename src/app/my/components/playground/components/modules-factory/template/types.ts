import { TemplateType } from '../types';

export interface ModuleTemplateProps {
  // 模板类型
  type: TemplateType;

  // 核心配置内容
  coreContent: React.ReactNode;

  // 自定义的模板名称，仅展示
  typeName?: string;
}

export interface TemplateTool {
  id: string;
  icon: string;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}
