const formatVolumeIconPath = require("../assets/scripts/main");

describe(formatVolumeIconPath, () => {
    test("lvl 0", () => {
        expect(formatVolumeIconPath("0")).toMatch(`./assets/media/icons/volume-level-0.svg`);
    });

    test("lvl 1", () => {
        expect(formatVolumeIconPath("10")).toMatch(`./assets/media/icons/volume-level-1.svg`);
    });

    test("lvl 2", () => {
        expect(formatVolumeIconPath("40")).toMatch(`./assets/media/icons/volume-level-2.svg`);
    });

    test("lvl 3", () => {
        expect(formatVolumeIconPath("80")).toMatch(`./assets/media/icons/volume-level-3.svg`);
    });
})