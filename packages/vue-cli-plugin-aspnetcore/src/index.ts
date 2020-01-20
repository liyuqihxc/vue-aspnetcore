import { ProjectOptions } from "@vue/cli-service"

function Initialize(api: any, projectOptions: ProjectOptions): void {
  api.registerCommand('ssr:build', {
    description: 'build for production (SSR)',
  }, (args: any) => {
      args;
  });
}

export = Initialize;
