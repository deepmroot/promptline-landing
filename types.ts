import React from 'react';

export enum MessageType {
  USER_COMMAND = 'USER_COMMAND',
  SYSTEM_OUTPUT = 'SYSTEM_OUTPUT',
  AGENT_THOUGHT = 'AGENT_THOUGHT',
  AGENT_ACTION = 'AGENT_ACTION',
  ERROR = 'ERROR'
}

export interface TerminalLine {
  id: string;
  type: MessageType;
  content: string;
  timestamp: number;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}