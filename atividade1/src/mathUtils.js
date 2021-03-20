class MathUtils {
    static percentage(relative, total) {
        return (relative / total) * 100;
    }

    static round(value) {
        const decimals = 2;
        return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
    }

    static percentageText(relative, total) {
        const p = MathUtils.round(MathUtils.percentage(relative, total));
        return p.toString() + " %";
    }
}

module.exports = MathUtils;