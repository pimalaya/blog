{
  description = "Pimalaya blog";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            typescript-language-server
          ];
        };

        # The built blog (a static `dist/`), deployed to GitHub Pages at
        # blog.pimalaya.org by CI. `nix build` -> ./result = the dist root
        # (index.html at its top level, posts at <slug>/index.html, plus
        # feed.xml and sitemap.xml), for local checks or self-hosting.
        packages.default = pkgs.buildNpmPackage {
          pname = "pimalaya-blog";
          version = "0.1.0";
          src = ./.;
          npmDepsHash = "sha256-6X5MKkA03TaKlYgBxq0VgDgQKDsPvbLcpx91+Pmh234=";

          # Static site: no runtime API. Outward links are baked into the
          # source (src/config.ts), so there is no build-time env to set.

          # `npm run build` == `tsc && vite build (client + ssr) && prerender`.
          installPhase = ''
            runHook preInstall
            cp -r dist $out
            runHook postInstall
          '';

          meta.description = "The Pimalaya blog, a static site built from markdown posts";
        };
      });
}
