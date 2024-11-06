// test/workflow.test.ts
import { describe, it, expect, vi } from 'vitest';
import { workflow } from '../src/index'; // Adjust the path to your codemod function

describe('SvelteKit Cookie Path Codemod', () => {
  it('should add { path: "/" } to cookies methods', async () => {
    // Mock the files API
    const mockFiles = vi.fn(() => ({
      jsFam: vi.fn().mockReturnThis(),
      astGrep: vi.fn().mockReturnThis(),
      replace: vi.fn().mockReturnThis(),
    }));

    // Call the workflow function with the mocked API
    await workflow({ files: mockFiles });

    // Verify that the astGrep and replace methods were called with the correct arguments
    expect(mockFiles).toHaveBeenCalledWith("**/*.{js,ts,tsx,jsx,cjs,mjs}");
    const jsFamInstance = mockFiles.mock.results[0].value;
    expect(jsFamInstance.astGrep).toHaveBeenCalledWith({
      rule: {
        kind: "call_expression",
        pattern: expect.stringContaining("cookies."),
      },
    });
    expect(jsFamInstance.replace).toHaveBeenCalledWith(expect.stringContaining("{ path: '/' }"));
  });
});