import { Path } from '@angular-devkit/core';

export interface FeatureOptions {
  /**
   * The name of the feature.
   */
  name: string;
  /**
   * The path to create the feature.
   */
  path?: string | Path;
  /**
   * The path to insert the feature declaration.
   */
  module?: Path;
  /**
   * Create a new module around this feature
   */
  createModule?: boolean;
  /**
   * Directive to insert declaration in module.
   */
  skipImport?: boolean;
  /**
   * Metadata name affected by declaration insertion.
   */
  metadata?: string;
  /**
   * Nest element type name
   */
  type?: string;
  /**
   * Application language.
   */
  language?: string;
  /**
   * The source root path
   */
  sourceRoot?: string;
  /**
   * Specifies if a spec file is generated.
   */
  spec?: boolean;
  /**
   * Flag to indicate if a directory is created.
   */
  flat?: boolean;
}
